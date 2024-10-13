import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTypesItems = createAsyncThunk(
  'types/fetchTypesItems',
  async (url) => {
    try {
      const response = await axios.get(url);
      if (response.status !== 200) {
        throw new Error(`Error: ${response.statusText}`)
      }
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const typesSlice = createSlice({
  name: 'typesItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTypesItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTypesItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchTypesItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default typesSlice.reducer;