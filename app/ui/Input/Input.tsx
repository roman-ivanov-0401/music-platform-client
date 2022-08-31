/* eslint-disable react/display-name */
import cn from "classnames";
import { forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";

import styles from "./input.module.scss";
import { InputProps } from "./input.types";

export const Input = forwardRef<
  HTMLInputElement,
  InputProps &
    ReturnType<
      UseFormRegister<{ name: string; email: string; password: string }>
    >
>(
  (
    {
      name,
      label,
      password,
      placeholder,
      className = "",
      width = "100%",
      error,
      onChange,
      onBlur,
    },
    ref
  ) => {
    return (
      <div className={styles.container} style={{ width }}>
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
        <input
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          type={password ? "password" : "text"}
          placeholder={placeholder}
          className={cn(
            styles.input,
            className,
            error ? styles.errorInput : ""
          )}
        />
        {error && <span className={styles.error}>{error.message}</span>}
      </div>
    );
  }
);
