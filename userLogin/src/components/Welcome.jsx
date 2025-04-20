import React from 'react';

const Welcome = ({ user, logout }) => {
  return (
    <div className="container">
      <h2>Chào mừng, {user} 👋</h2>
      <p>Bạn đã đăng nhập thành công.</p>
      <button onClick={logout}>Đăng xuất</button>
    </div>
  );
};

export default Welcome;
