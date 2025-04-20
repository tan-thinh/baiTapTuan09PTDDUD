// src/App.js
import React from 'react';
import { useSelector } from 'react-redux';
import AuthComponent from './components/AuthComponent';
import CartComponent from './components/CartComponent';
import ProductComponent from './components/ProductComponent';

const App = () => {
  const { isLoggedIn } = useSelector(state => state.auth);

  return (
    <div>
      {!isLoggedIn ? (
        <AuthComponent />
      ) : (
        <>
          <CartComponent />
          <ProductComponent />
        </>
      )}
    </div>
  );
};

export default App;
