import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./slices/user/user.slice";
import { authApi } from "@/services/auth.service";
import { searchApi } from "@/services/search.service";

const rootReducer = combineReducers({
  userReducer,
  [authApi.reducerPath]: authApi.reducer,
  [searchApi.reducerPath]: searchApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware, searchApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
