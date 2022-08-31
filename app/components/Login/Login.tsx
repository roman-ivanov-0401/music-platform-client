import { FC } from "react";

import { AuthMode } from "@/screens/AuthScreen";

import { Button } from "@/ui/Button";
import { Input } from "@/ui/Input";

import { emailRegExp } from "@/utils/regexps";

import { LoginProps } from "./login.types";

export const Login: FC<LoginProps> = ({
  authError,
  handleSubmit,
  register,
  submitHandler,
  fieldErrors,
  classNames,
  switchModeHandler,
}) => {
  return (
    <form
      className={classNames.container}
      onSubmit={handleSubmit(submitHandler)}
    >
      <h1 className={classNames.mode}>Log In</h1>
      <Input
        label="Email"
        placeholder="Enter your e-mail"
        style={{ width: "100%" }}
        error={fieldErrors?.email}
        {...register("email", {
          required: { value: true, message: "This field is required" },
          pattern: { message: "Enter valid e-mail", value: emailRegExp },
        })}
      />
      <Input
        label="Password"
        placeholder="Enter your password"
        style={{ width: "100%" }}
        error={fieldErrors?.password}
        {...register("password", {
          required: { value: true, message: "This field is required" },
          minLength: {
            value: 8,
            message: "Password must be 8 charapters or more",
          },
        })}
        password
      />
      {authError && (
        <h3 className={classNames.wrongCredentials}>
          Wrong e-mail or password
        </h3>
      )}
      <div className={classNames.actions}>
        <span>
          Don&apos;t have an account?{" "}
          <span
            className={classNames.switchMode}
            onClick={() => switchModeHandler(AuthMode.register)}
          >
            Register!
          </span>
        </span>

        <Button type="submit">Log in</Button>
      </div>
    </form>
  );
};
