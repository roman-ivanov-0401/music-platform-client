import Link from "next/link";
import { FC } from "react";

import styles from "./navPoint.module.scss";
import { NavPointProps } from "./navPoint.types";

export const NavPoint: FC<NavPointProps> = ({ Icon, link, name }) => {
  return (
    <Link href={link}>
      <a className={styles.navPoint}>
        <Icon />
        <span className={styles.name}>{name}</span>
      </a>
    </Link>
  );
};
