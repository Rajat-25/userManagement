import { configureStore } from '@reduxjs/toolkit';
import userApi from './apis/userApi';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultmiddleware) => {
    return getDefaultmiddleware().concat(userApi.middleware);
  },
});

export type indexState = ReturnType<typeof store.getState>;

export * from './apis/userApi';
export * from './slices/userSlice';
export default store;
