import { configureStore } from "@reduxjs/toolkit";
import eventBookingReducer from "./../reducers/jobSeekersBookingSlice";

export const store = configureStore({
  reducer: {
    jobSeekerBookings: eventBookingReducer,
  },
});
