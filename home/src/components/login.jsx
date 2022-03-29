import { getAuth, signInWithPopup } from 'firebase/auth';
import { provider } from '../../firebaseConfig/firebase';
import React from 'react';

const Login = () => {
  const auth = getAuth();

  return (
    <div className="h-screen grid place-content-center content-evenly">
      <h1 className="text-5xl">Bitcoin Price Checker</h1>

      <button
        className="uppercase bg-blue-600 text-sm sm:text-lg p-2 sm:p-4 items-center font-medium text-white"
        onClick={() => signInWithPopup(auth, provider)}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
