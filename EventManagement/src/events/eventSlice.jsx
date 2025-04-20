import { createSlice } from '@reduxjs/toolkit';

// Initial state của các sự kiện
const initialState = {
  events: [],
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    // Action thêm sự kiện
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
    // Action sửa sự kiện
    editEvent: (state, action) => {
      const { id, updatedEvent } = action.payload;
      const index = state.events.findIndex(event => event.id === id);
      if (index !== -1) {
        state.events[index] = { ...state.events[index], ...updatedEvent };
      }
    },
    // Action xóa sự kiện
    deleteEvent: (state, action) => {
      state.events = state.events.filter(event => event.id !== action.payload);
    },
  },
});

export const { addEvent, editEvent, deleteEvent,updatedEvent } = eventSlice.actions;

export default eventSlice.reducer;
