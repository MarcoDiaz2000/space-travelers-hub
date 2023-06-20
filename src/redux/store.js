import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketsSlice';

export default configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});
