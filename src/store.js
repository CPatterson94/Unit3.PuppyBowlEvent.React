import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/index";
import playerSlice from "./slices/playerSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    puppies: playerSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export default store;
