import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  list: [],
};
const appointmentSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    addAppointment: {
      reducer(state, action) {
        state.list.push(action.payload);
      },
      prepare({ name, date }) {
        return {
          payload: {
            id: nanoid(),
            name,
            date,
          },
        };
      },
    },
    deleteAppointment: (state, action) => {
      state.list = state.list.filter((app) => app.id !== action.payload);
    },
    editAppointment: (state, action) => {
      const index = state.list.findIndex((app) => app.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
  },
});
export const { addAppointment, deleteAppointment, editAppointment } =
  appointmentSlice.actions;
export default appointmentSlice.reducer;
