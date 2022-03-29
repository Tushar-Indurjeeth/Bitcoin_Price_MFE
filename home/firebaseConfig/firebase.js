import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAyj1vHzuTWUKvId_HJAFgltEcwMvTTWZc',
  authDomain: 'finance-planner-4dbc0.firebaseapp.com',
  projectId: 'finance-planner-4dbc0',
  storageBucket: 'finance-planner-4dbc0.appspot.com',
  messagingSenderId: '809171721925',
  appId: '1:809171721925:web:76c68520bc64b8019e9aac',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { app, auth, provider };
