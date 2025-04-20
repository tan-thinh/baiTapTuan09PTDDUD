import { createSlice } from '@reduxjs/toolkit';

const bmiSlice = createSlice({
  name: 'bmi',
  initialState: {
    height: '',
    weight: '',
    bmi: null,
  },
  reducers: {
    updateInput: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    calculateBMI: (state) => {
      const h = parseFloat(state.height) / 100;
      const w = parseFloat(state.weight);
      if (h > 0 && w > 0) {
        const result = w / (h * h);
        state.bmi = result.toFixed(2);
      }
    },
  },
});

export const { updateInput, calculateBMI } = bmiSlice.actions;
export default bmiSlice.reducer;
