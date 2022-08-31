import { NextPage } from "next";

import { AuthPage } from "@/pages/AuthPage";

import { AuthMode } from "@/screens/AuthScreen";

const LoginPage: NextPage = () => {
  return <AuthPage mode={AuthMode.login} />;
};

export default LoginPage;
