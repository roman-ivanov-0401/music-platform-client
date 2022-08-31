import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { SearchResponse } from "@/types/search.types";

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER_URL,
  }),
  endpoints: (builder) => ({
    searchByTerm: builder.mutation<SearchResponse, string>({
      query: (searchTerm) => {
        return {
          method: "GET",
          url: `/search?searchTerm=${searchTerm}`,
        };
      },
    }),
  }),
});

export const { useSearchByTermMutation } = searchApi;
