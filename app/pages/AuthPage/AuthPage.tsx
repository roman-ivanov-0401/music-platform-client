import { FC } from "react";

import { MainLayout } from "@/layouts/MainLayout";

import { AuthSrceen } from "@/screens/AuthScreen";
import { AuthPageProps } from "./authPage.types";

export const AuthPage: FC<AuthPageProps> = ({mode}) => {
  return (
    <MainLayout>
      <AuthSrceen defaultMode={mode} />
    </MainLayout>
  );
};
