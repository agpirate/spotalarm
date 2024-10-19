import { configureStore } from '@reduxjs/toolkit';
import  cartReducer  from './store_cSlice';
import productReducer from './store_pSlice';
import userReducer from "./userSlice"
const loadState = () => {
  const serializedState = localStorage.getItem('token');
  if (serializedState) {
    return JSON.parse(serializedState)
  }
  return undefined;
};

const saveState = (state: any) => {
  localStorage.setItem('cart', JSON.stringify(state) ?? '');
};

const preloadedState = {
  cart: loadState(),
};

//store holds both products and cart states, 
//managed by their respective reducers
//reducer(function take storeName,currentState,actions and retun newState).
const store = configureStore({
  reducer: { 
    //dispacher-- hold all store_functions and ready to fire
    //---- and functions_of given store could send an action.
    //useSelector--const products = useSelector((state: RootState) => state.products.products);
    //--- selecter use to rende the state_variable_values
    // products: productReducer,
    user: userReducer,
    cart: cartReducer,

  },
  preloadedState,
});

// store.subscribe(() => {
//   saveState(store.getState().cart); //watch for cart_state_value and update storage..
// });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
