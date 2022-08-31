import { useRouter } from "next/router";
import { FC, useEffect } from "react";

import { useAuth } from "@/hooks/useAuth";

import { AuthGuardProps } from "./auth.guard.types";

export const AuthGuard: FC<AuthGuardProps> = ({ children, role }) => {
  const { push } = useRouter();
  const access = useAuth(role);
  useEffect(() => {
    if (!access) {
      push("/auth/login");
    }
  }, [access, push]);

  return <> {children} </>;
};
