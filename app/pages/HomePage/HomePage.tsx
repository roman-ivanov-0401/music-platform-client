import { FC } from "react";

import { MainLayout } from "@/layouts/MainLayout";

import { AuthGuard } from "@/guards/AuthGuard";

import { Roles } from "@/types/user.types";
import { useTypedSelector } from "@/hooks/redux";

export const HomePage: FC = () => {
  return (
    <AuthGuard role={Roles.user}>
      <MainLayout>HomePage</MainLayout>
    </AuthGuard>
  );
};
