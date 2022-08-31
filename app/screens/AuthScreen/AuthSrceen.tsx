import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Login } from "@/components/Login";
import { Register } from "@/components/Register";

import { Button } from "@/ui/Button";
import { Input } from "@/ui/Input";

import { loginThunk, registerThunk } from "@/store/slices/user/user.actions";

import { useTypedDispatch, useTypedSelector } from "@/hooks/redux";

import { emailRegExp } from "@/utils/regexps";

import styles from "./authScreen.module.scss";
import {
  AuthLoginFields,
  AuthMode,
  AuthRegisterFields,
  AuthScreenProps,
} from "./authScreen.types";

export const AuthSrceen: FC<AuthScreenProps> = ({ defaultMode }) => {
  const router = useRouter();

  const {
    register: loginFieldRegister,
    handleSubmit: loginHandleSubmit,
    formState: { errors: loginFieldErrors },
  } = useForm<AuthLoginFields>({ mode: "onChange" });
  const {
    register: registerFieldRegister,
    handleSubmit: registerHandleSubmit,
    formState: { errors: registerFieldErrors },
  } = useForm<AuthRegisterFields>({ mode: "onChange" });

  const dispatch = useTypedDispatch();
  const isUser = useTypedSelector((state) => state.userReducer.userData._id);
  const authError = useTypedSelector((state) => state.userReducer.error);

  const switchMode = (mode: AuthMode) => {
    if (mode === AuthMode.login) router.push("/auth/login");
    if (mode === AuthMode.register) router.push("/auth/register");
  };
  const onSubmitLogin: SubmitHandler<AuthLoginFields> = (data) => {
    dispatch(loginThunk(data))
  };
  const onSubmitRegister: SubmitHandler<AuthRegisterFields> = (data) => {
    dispatch(registerThunk(data))
  };

  useEffect(() => {
    if (isUser) {
      router.push("/");
    }
  }, [isUser, router]);

  return (
    <div className={styles.authScreen}>
      {defaultMode === AuthMode.login ? (
        <Login
          authError={!!authError}
          handleSubmit={loginHandleSubmit}
          register={loginFieldRegister}
          submitHandler={onSubmitLogin}
          switchModeHandler={switchMode}
          fieldErrors={loginFieldErrors}
          classNames={{
            actions: styles.actions,
            container: styles.container,
            mode: styles.mode,
            switchMode: styles.switchMode,
            wrongCredentials: styles.wrongCredentials,
          }}
        />
      ) : (
        <Register
          authError={!!authError}
          handleSubmit={registerHandleSubmit}
          register={registerFieldRegister}
          submitHandler={onSubmitRegister}
          switchModeHandler={switchMode}
          fieldErrors={registerFieldErrors}
          classNames={{
            actions: styles.actions,
            container: styles.container,
            mode: styles.mode,
            switchMode: styles.switchMode,
            wrongCredentials: styles.wrongCredentials,
          }}
        />
      )}
    </div>
  );
};
