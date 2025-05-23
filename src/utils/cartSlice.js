import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Redux old way
      // const newCartItems = [...state.items];
      // newCartItems.push(action.payload);
      // return {
      //   ...state,
      //   items: newCartItems,
      // };

      // In Redux Toolkit, we have to mutate the state because it internally uses immer behind the scenes
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    //originalState = {items: ["pizza"]}
    clearCart: (state, action) => {
      //RTK - either Mutate the existing state or return a new State
      // state.items.length = 0; // state.items = []

      return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;