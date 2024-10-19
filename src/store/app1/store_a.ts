import { configureStore } from '@reduxjs/toolkit';
import layout1Reducer from './store_aSlice';

const loadState = () => {
  const serializedState = localStorage.getItem('cart');
  if (serializedState) {
    return JSON.parse(serializedState)
  }
  return undefined;
};

const saveState = (state: any) => {
  localStorage.setItem('cart', JSON.stringify(state) ?? '');
};

const preloadedState = {
  layout1: loadState(),
};

const layout1Store = configureStore({
  reducer: {
    layout1: layout1Reducer,
  },
  preloadedState,
});
layout1Store.subscribe(() => {
  saveState(layout1Store.getState().layout1); //watch for cart_state_value and update storage..
});
// export type RootState = ReturnType<typeof layout1Store.getState>;
// export type AppDispatch = typeof layout1Store.dispatch;
export default layout1Store;
