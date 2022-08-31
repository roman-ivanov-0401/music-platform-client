import { ThunkDispatch, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

import { tokensToCookie } from "@/utils/cookies";
import { isFetchBaseQueryError } from "@/utils/rtkQuery.helpers";

import { Credentials, RegisterRequestBody } from "@/types/auth.types";

import { authApi } from "@/services/auth.service";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials: Credentials, { dispatch, rejectWithValue }) => {
    const result = dispatch(authApi.endpoints.login.initiate(credentials));
    result.reset();
    const response = await result;
    if (isFetchBaseQueryError(response)) {
      return rejectWithValue(response);
    }
    tokensToCookie(response.data.accessToken, response.data.refreshToken);
    return response;
  }
);

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (
    registerRequestBody: RegisterRequestBody,
    { dispatch, rejectWithValue }
  ) => {
    const result = dispatch(
      authApi.endpoints.register.initiate(registerRequestBody)
    );
    result.reset();
    const response = await result;
    if (isFetchBaseQueryError(response)) {
      return rejectWithValue(response);
    }
    tokensToCookie(response.data.accessToken, response.data.refreshToken);
    return response.data;
  }
);
