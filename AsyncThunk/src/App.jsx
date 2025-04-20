import React from 'react';
import UserList from './users/UserList';

const App = () => (
  <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
    <h1>🌐 Gọi API với createAsyncThunk</h1>
    <UserList />
  </div>
);

export default App;
