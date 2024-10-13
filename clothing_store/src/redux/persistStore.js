import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from 'redux';
import featuredReducer from './feturedSlice';
import catalogReducer from './catalogSlice';
import cartReducer from "./cartSlice";
import catalogFilterReducer from "./catalogFilterSlice";
import productReducer from "./productSlice";
import designersReducer from "./designersSlice";
import brandsReducer from "./brandSlice";
import categoriesReducer from "./categoriesSlice";
import typesReducer from "./typesSlice";
import categoriesByTypesReducer from "./categoriesByTypesSlice";

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
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
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
