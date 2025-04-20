import React, { useState } from 'react';

const LoginForm = ({ login }) => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim() !== '') {
      login(username);
    }
  };

  return (
    <div className="container">
      <h2>Đăng nhập</h2>
      <input
        type="text"
        placeholder="Nhập tên người dùng"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
};

export default LoginForm;
