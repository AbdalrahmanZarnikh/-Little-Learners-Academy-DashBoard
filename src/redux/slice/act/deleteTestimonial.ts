import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteTestimonial = createAsyncThunk(
    "testimonials/delete",
    async (id:string, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await axios.delete(
          `http://localhost:5000/api/testimonials/${id}`,
        );
        console.log(res.data)
  
        return id;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.message);
        }
      }
    }
  );

  export default deleteTestimonial