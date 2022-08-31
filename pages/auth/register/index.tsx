import { NextPage } from "next";

import { AuthPage } from "@/pages/AuthPage";

import { AuthMode } from "@/screens/AuthScreen";

const RegisterPage: NextPage = () => {
  return <AuthPage mode={AuthMode.register} />;
};

export default RegisterPage;
