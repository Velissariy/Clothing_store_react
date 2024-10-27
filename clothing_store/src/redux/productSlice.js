import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (url) => {
    try {
      const response = await axios.get(url);
      if (response.status !== 200) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const initialState = {
  product: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    updateSelectedProductData: (state, action) => {
      state.product.selectedColor = action.payload.selectedColor;
      state.product.selectedSize = action.payload.selectedSize;
      state.product.selectedQuantity = action.payload.selectedQuantity;
    },
    clearProduct: (state, action) => {
      state.product = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.product = {
          ...action.payload,
          selectedColor: undefined,
          selectedSize: undefined,
          selectedQuantity: 1
        };
        state.loading = false;

      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {clearProduct, updateSelectedProductData} = productSlice.actions;
export default productSlice.reducer;