import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  isFetchBaseQueryError,
  isSuccessRequest,
} from "@/utils/rtkQuery.helpers";

import { Credentials } from "@/types/auth.types";
import { User } from "@/types/user.types";

import { loginThunk, registerThunk } from "./user.actions";

interface IState {
  userData: User;
  error: any;
  isLoading: boolean;
}

const initialState: IState = {
  userData: {
    name: "",
    email: "",
    roles: [],
    _id: "",
    library: "",
  },
  error: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.userData = action.payload.data.user;
      })
      .addCase(loginThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(registerThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { reducer: userReducer } = userSlice;
