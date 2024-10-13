import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFeaturedItems = createAsyncThunk(
  'featured/fetchFeaturedItems',
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

const featuredSlice = createSlice({
  name: 'featuredItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeaturedItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFeaturedItems.fulfilled, (state, action) => {
        state.items = action.payload.map((item) => ({
          ...item,
          selectedColor: undefined,
          selectedSize: undefined,
          selectedQuantity: 1
        }));
        state.loading = false;
      })
      .addCase(fetchFeaturedItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default featuredSlice.reducer;