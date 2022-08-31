import {
  FieldErrorsImpl,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

import { AuthMode, AuthRegisterFields } from "@/screens/AuthScreen";

export interface RegisterProps {
  authError: boolean;
  classNames: {
    container: string;
    mode: string;
    wrongCredentials: string;
    actions: string;
    switchMode: string;
  };
  register: UseFormRegister<AuthRegisterFields>;
  handleSubmit: UseFormHandleSubmit<AuthRegisterFields>;
  submitHandler: SubmitHandler<AuthRegisterFields>;
  switchModeHandler: (mode: AuthMode) => void;
  fieldErrors?: FieldErrorsImpl<AuthRegisterFields>;
}
