import { FC } from "react";

import { AuthMode } from "@/screens/AuthScreen";

import { Button } from "@/ui/Button";
import { Input } from "@/ui/Input";

import { emailRegExp } from "@/utils/regexps";

import { RegisterProps } from "./register.types";

export const Register: FC<RegisterProps> = ({
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
      <h1 className={classNames.mode}>Registrer</h1>
      <Input
        label="Name"
        placeholder="Enter your name"
        style={{ width: "100%" }}
        error={fieldErrors?.name}
        {...register("name", {
          required: { value: true, message: "This field is required" },
        })}
      />
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
          Something went wrong...
        </h3>
      )}
      <div className={classNames.actions}>
        <span>
          Already have an account?{" "}
          <span
            className={classNames.switchMode}
            onClick={() => switchModeHandler(AuthMode.login)}
          >
            Log in!
          </span>
        </span>

        <Button type="submit">Registrer</Button>
      </div>
    </form>
  );
};
