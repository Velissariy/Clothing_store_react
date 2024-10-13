import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCatalogItems = createAsyncThunk(
  'catalog/fetchCatalogItems',
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
  totalPages: 1,
  currentPage: 1,
};

const catalogSlice = createSlice({
  name: 'catalogItems',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      const newPage = action.payload;
      state.currentPage = Math.max(1, newPage);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalogItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCatalogItems.fulfilled, (state, action) => {
        state.items = action.payload.data.map((item) => ({
          ...item,
          selectedColor: undefined,
          selectedSize: undefined,
          selectedQuantity: 1
        }));
        state.loading = false;
        state.totalPages = action.payload.total;
        if (state.currentPage > state.totalPages) {
          state.currentPage = state.totalPages > 0 ? state.totalPages : 1;
        }
      })
      .addCase(fetchCatalogItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {updateSelectedData, setCurrentPage} = catalogSlice.actions;
export default catalogSlice.reducer;