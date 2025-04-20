import { configureStore } from '@reduxjs/toolkit';
import bmiReducer from '../bmi/bmiSlice';

export const store = configureStore({
  reducer: {
    bmi: bmiReducer,
  },
});
