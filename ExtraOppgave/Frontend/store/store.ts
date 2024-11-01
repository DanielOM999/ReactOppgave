import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
