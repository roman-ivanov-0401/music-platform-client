import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

import { AuthRespose } from "@/types/auth.types";

export function isFetchBaseQueryError(
  response:
    | {
        data: AuthRespose;
      }
    | {
        error: FetchBaseQueryError | SerializedError;
      }
): response is { error: FetchBaseQueryError | SerializedError } {
  return Object.keys(response)[0] === "error";
}

export function isSuccessRequest(
  response:
    | {
        data: AuthRespose;
      }
    | {
        error: FetchBaseQueryError | SerializedError;
      }
): response is { error: FetchBaseQueryError | SerializedError } {
  return Object.keys(response)[0] === "data";
}
