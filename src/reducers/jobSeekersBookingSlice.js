import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UseAxiosPublic from "../Comonents/Hooks/UseAxiosPublic/UseAxiosPublic";

const initialState = {
  bookings: [],
  status: "idle",
  error: null,
};

const axiosPublic = UseAxiosPublic();

export const fetchJobSeekersBookings = createAsyncThunk(
  "bookings/fetchJobSeekersBookings",
  async email => {
    try {
      const response = await axiosPublic.get(
        `/job-fair/job-seeker/event-bookings`,
        {
          params: {
            email: email,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw Error("Error fetching data");
    }
  }
);

const eventBookingSlice = createSlice({
  name: "jobSeekerBookings",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchJobSeekersBookings.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchJobSeekersBookings.fulfilled, (state, action) => {
        (state.status = "succeeded"), (state.bookings = action.payload);
      })
      .addCase(fetchJobSeekersBookings.rejected, (state, action) => {
        (state.status = "failed"), (state.error = action.error.message);
      });
  },
});

export default eventBookingSlice.reducer;
