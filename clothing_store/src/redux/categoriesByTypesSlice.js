import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategoriesByTypesItems = createAsyncThunk(
  'categoriesByTypes/fetchCategoriesByTypesItems',
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

const categoriesByTypesSlice = createSlice({
  name: 'CategoriesByTypes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesByTypesItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategoriesByTypesItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategoriesByTypesItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default categoriesByTypesSlice.reducer;