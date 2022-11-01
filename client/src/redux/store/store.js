import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../stateSlice/productSlice';
import settingsReducer from '../stateSlice/settingsSlice';
export default configureStore({
  reducer: {
    settings: settingsReducer,
    product: productReducer,
  },
});
