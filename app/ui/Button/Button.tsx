import { FC } from "react";

import { ButtonProps } from "./button.types";

import styles from "./button.module.scss";

export const Button: FC<ButtonProps> = ({children, ...rest}) => {
  return(
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
};