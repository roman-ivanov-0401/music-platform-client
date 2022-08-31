import { Roles } from "@/types/user.types";
import { PropsWithChildren } from "react";

export type AuthGuardProps = PropsWithChildren<{
    role: Roles
}>;
