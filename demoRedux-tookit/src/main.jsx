import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// 💡 Thêm vào đây:
import { Provider } from 'react-redux';
import store from './redux/store'; // đường dẫn tới store của bạn

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
