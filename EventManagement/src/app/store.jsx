import { configureStore } from '@reduxjs/toolkit';
import eventReducer from '../events/eventSlice'; // Đường dẫn tới eventSlice

export const store = configureStore({
  reducer: {
    events: eventReducer,
  },
});
