const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath:
      argv.mode === 'development'
        ? 'http://localhost:3000/'
        : 'https://bitcoin-price-mfe.vercel.app/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'home',
      filename: 'remoteEntry.js',
      remotes:
        argv.mode === 'development'
          ? {
              home: 'home@http://localhost:3000/remoteEntry.js',
              bitcoin: 'bitcoin@http://localhost:3001/remoteEntry.js',
            }
          : {
              home: 'https://bitcoin-price-mfe.vercel.app/remoteEntry.js',
              bitcoin:
                'bitcoin@https://bitcoin-price-mfe-price-page.vercel.app/remoteEntry.js',
            },
      exposes: {
        './firebaseConfig': './firebaseConfig/firebase.js',
        './MainContent': './src/MainContent.jsx',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
});
