import {
  FieldErrorsImpl,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

import { AuthLoginFields, AuthMode } from "@/screens/AuthScreen";

export interface LoginProps {
  authError: boolean;
  classNames: {
    container: string;
    mode: string;
    wrongCredentials: string;
    actions: string;
    switchMode: string;
  };
  register: UseFormRegister<AuthLoginFields>;
  handleSubmit: UseFormHandleSubmit<AuthLoginFields>;
  submitHandler: SubmitHandler<AuthLoginFields>;
  switchModeHandler: (mode: AuthMode) => void;
  fieldErrors?: FieldErrorsImpl<AuthLoginFields>;
}
