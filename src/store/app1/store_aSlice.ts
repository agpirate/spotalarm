import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Layout1State {
  data: string[];
}

const initialState: Layout1State = {
  data: [],
};

const layout1Slice = createSlice({
  name: 'layout1',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<string[]>) {
      state.data = action.payload;
    },
    addItem(state, action: PayloadAction<string>) {
      state.data.push(action.payload);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.data = state.data.filter(item => item !== action.payload);
    },
  },
});

// Export actions for usage in components
export const { setData, addItem, removeItem } = layout1Slice.actions;
export default layout1Slice.reducer;
