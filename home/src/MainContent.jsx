import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { auth } from '../firebaseConfig/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import BitcoinContent from 'bitcoin/BitcoinContent';

import './index.scss';
import Login from './components/login';

const MainContent = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      {!user ? (
        <Login />
      ) : (
        <Routes>
          <Route exact path="/" element={<BitcoinContent />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default MainContent;
