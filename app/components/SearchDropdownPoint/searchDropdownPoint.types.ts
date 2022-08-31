import { PropsWithChildren } from "react";

export type SearchDropdownPointProps = PropsWithChildren<{
  className: string;
  loading?: boolean;
  data?: {
    type: string;
    image: string;
  };
}>;
