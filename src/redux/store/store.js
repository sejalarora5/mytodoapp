import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../slices/todoSlice";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  timeout: 0,
};
const rootReducer = combineReducers({
  todos: todoReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      // serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
