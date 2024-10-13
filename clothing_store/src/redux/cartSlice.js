import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (!item) {
        state.items.push({...action.payload});
        state.totalPrice = parseFloat((state.totalPrice + action.payload.price * action.payload.selectedQuantity).toFixed(2));
        state.totalQuantity = state.totalQuantity + action.payload.selectedQuantity;
      }
    },
    delProduct: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);

      if (itemIndex > -1) {
        const item = state.items[itemIndex];
        state.totalPrice = parseFloat((state.totalPrice - item.price * item.selectedQuantity).toFixed(2));
        state.items.splice(itemIndex, 1);
        state.totalQuantity = state.totalQuantity - item.selectedQuantity;
      }
    },
    delProductByCartID: (state, action) => {
      const itemToDelete = state.items[action.payload];
      state.items.splice(action.payload, 1);
      state.totalPrice = parseFloat((state.totalPrice - itemToDelete.price * itemToDelete.count).toFixed(2));
      state.totalQuantity = state.totalQuantity - itemToDelete.selectedCount;
    },
    clearCart: (state, action) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
    updateSelectedCartData: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      const item = state.items[itemIndex];
      item.selectedColor = action.payload.selectedColor;
      item.selectedSize = action.payload.selectedSize;

      state.totalPrice = parseFloat((state.totalPrice - item.price * item.selectedQuantity).toFixed(2));
      state.totalQuantity -= item.selectedQuantity;
      item.selectedQuantity = action.payload.selectedQuantity;
      state.totalPrice = parseFloat((state.totalPrice + item.price * item.selectedQuantity).toFixed(2));
      state.totalQuantity += item.selectedQuantity;
    },
  }
});

export const {
  delProductByCartID,
  clearCart,
  addProduct,
  delProduct,
  updateSelectedCartData
} = cartSlice.actions;
export default cartSlice.reducer;