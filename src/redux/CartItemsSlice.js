import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cart") !== null
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
const initialState = { value: items };
export const cartItemSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const duplicate = findItem(state.value, newItem);

      if (duplicate.length > 0) {
        state.value = delItem(state.value, newItem);
        state.value = [
          ...state.value,
          {
            ...newItem,
            id: duplicate[0].id,
            quantity: newItem.quantity + duplicate[0].quantity,
          },
        ];
      } else {
        state.value = [
          ...state.value,
          {
            ...newItem,
            id:
              state.value.length > 0
                ? state.value[state.value.length - 1].id + 1
                : 1,
          },
        ];
      }
      localStorage.setItem("cart", JSON.stringify(sortItems(state.value)));
    },
    updateItem: (state, action) => {
      const itemUpdate = action.payload;

      const item = findItem(state.value, itemUpdate);

      if (item.length > 0) {
        state.value = delItem(state.value, itemUpdate);
        state.value = [
          ...state.value,
          {
            ...itemUpdate,
            id: item[0].id,
          },
        ];
        localStorage.setItem("cart", JSON.stringify(sortItems(state.value)));
      }
    },
    deleteItem: (state, action) => {
      const removeItem = action.payload;

      state.value = delItem(state.value, removeItem);
      localStorage.setItem("cart", JSON.stringify(sortItems(state.value)));
    },
    clearCart: (state, action) => {
      state.value = [];
      localStorage.setItem("cart", JSON.stringify(sortItems(state.value)));
    },
  },
});

const findItem = (arr, item) => arr.filter((e) => e.pid === item.pid);

const delItem = (arr, item) => arr.filter((e) => e.pid !== item.pid);

const sortItems = (arr) =>
  arr.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));

export const { addItem, updateItem, deleteItem, clearCart } =
  cartItemSlice.actions;
export default cartItemSlice.reducer;
