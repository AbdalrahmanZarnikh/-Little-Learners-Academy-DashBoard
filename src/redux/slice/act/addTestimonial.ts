import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addTestimonail = createAsyncThunk(
    "testimonials/add",
    async (data:any, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await axios.post(
          "http://localhost:5000/api/testimonials",data
        );
        console.log(res.data)
  
        return res.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.message);
        }
      }
    }
  );

  export default addTestimonail