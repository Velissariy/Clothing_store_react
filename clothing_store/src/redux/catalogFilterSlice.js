import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  sizes: [],
  trendingNow: false,
  maxPrice: 0,
  minPrice: 0,
  type: '',
  category: '',
  brand: '',
  designer: ''
};

const catalogFilerSlice = createSlice({
  name: 'catalogFilter',
  initialState,
  reducers: {
    setSizes: (state, action) => {
      state.sizes = action.payload;
    },
    setTrendingNow: (state, action) => {
      state.trendingNow = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    toggleSize: (state, action) => {
      const size = action.payload;
      if (state.sizes.includes(size)) {
        state.sizes = state.sizes.filter(s => s !== size);
      } else {
        state.sizes.push(size);
      }
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    toggleTrendingNow: (state, action) => {
      state.trendingNow = !state.trendingNow;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setDesigner: (state, action) => {
      state.designer = action.payload;
    },
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
  },
});

export const {
  toggleTrendingNow,
  setType,
  toggleSize,
  setSizes,
  setTrendingNow,
  setMaxPrice,
  setMinPrice,
  setBrand,
  setCategory,
  setDesigner,
} = catalogFilerSlice.actions;
export default catalogFilerSlice.reducer;