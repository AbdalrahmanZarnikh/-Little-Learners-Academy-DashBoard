import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllTestimonials = createAsyncThunk(
    "testimonials/all",
    async (_, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await axios.get(
          "http://localhost:5000/api/testimonials"
        );
  
        return res.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.message);
        }
      }
    }
  );

  export default getAllTestimonials