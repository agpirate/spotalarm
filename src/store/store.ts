// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './store_aSlice'; // We'll create this next

const persistConfig = {
  key: 'root',
  storage,
};

// Combine reducers if you have multiple slices
const rootReducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);

// Hook to use dispatch easily in components
export const useAppDispatch = () => useDispatch();
