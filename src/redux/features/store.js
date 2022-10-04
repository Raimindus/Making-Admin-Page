import { configureStore } from "@reduxjs/toolkit";

import carSliceReducer from "./counter/carSlice";

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    carSlice: carSliceReducer,
  },
});
