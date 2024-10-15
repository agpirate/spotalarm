// src/store/userSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axios';

// Async Thunk to fetch data with customizable method and headers
export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async ({ method, url, headers }: { method: string, url: string, headers?: Record<string, string> }, thunkAPI) => {
    try {

        //-------------- if POST/PUT ---

        //-------------- if Get/Delete  ----


      const response = await axiosInstance({
        method,            // e.g., 'GET', 'POST', etc.
        url,               // API endpoint, e.g., '/users/me'
        headers,           // Custom headers passed when calling the thunk
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

interface UserState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
