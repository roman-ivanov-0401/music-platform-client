/* eslint-disable react/display-name */
import { FC, forwardRef } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import { MobileNavbarTogglerProps } from "./mobileNavbarToggler.types";

import styles from "./mobileNavbarToggler.module.scss";

export const MobileNavbarToggler = forwardRef<HTMLButtonElement, MobileNavbarTogglerProps>(({onClick}, ref) => {
  return(
    <button className={styles.toggler} onClick={onClick}>
        <MdKeyboardArrowRight/>
    </button>
  );
});

