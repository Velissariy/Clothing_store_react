import {configureStore} from '@reduxjs/toolkit';
import featuredReducer from './feturedSlice';
import catalogReducer from './catalogSlice';
import catalogFilterReducer from './catalogFilterSlice';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import designersReducer from "./designersSlice";
import brandsReducer from "./brandSlice";
import categoriesReducer from "./categoriesSlice";
import typesReducer from "./typesSlice";
import categoriesByTypesReducer from "./categoriesByTypesSlice";

const store = configureStore({
  reducer: {
    featuredItems: featuredReducer,
    products: catalogReducer,
    cartItems: cartReducer,
    catalogFilter: catalogFilterReducer,
    product: productReducer,
    designers: designersReducer,
    brands: brandsReducer,
    categories: categoriesReducer,
    types: typesReducer,
    categoriesByTypes: categoriesByTypesReducer,
  },
});

export default store;