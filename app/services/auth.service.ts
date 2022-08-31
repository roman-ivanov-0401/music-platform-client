import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import {
  AuthRespose,
  Credentials,
  RegisterRequestBody,
} from "@/types/auth.types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthRespose, Credentials>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation<AuthRespose, RegisterRequestBody>({
      query: (registerRequestBody) => ({
        url: "/auth/register",
        method: "POST",
        body: registerRequestBody,
      }),
    }),
  }),
});
