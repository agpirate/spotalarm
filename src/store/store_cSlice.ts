import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [    { id: 1, name: 'Product 1', price: 10,quantity:1  },
    { id: 2, name: 'Product 2', price: 20, quantity:1 },
    { id: 3, name: 'Product 3', price: 30, quantity:1 },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //dispatch(addItemToCart({ id: product.id, name: product.name}));
    //state(is_dataVariable,actions(is the incoming new_data = payload))
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
