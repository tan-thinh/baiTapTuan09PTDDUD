import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';

const App = () => {
  const [user, setUser] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (username) => {
    setUser(username);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser('');
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>🔐 Quản lý Đăng nhập</h1>
      {isLoggedIn ? (
        <Welcome user={user} logout={logout} />
      ) : (
        <LoginForm login={login} />
      )}
    </div>
  );
};

export default App;
