import { FC } from "react";
import { MdMusicNote } from "react-icons/md";

import styles from "./logo.module.scss";
import { LogoProps } from "./logo.types";

export const Logo: FC<LogoProps> = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.logoBg}>
        <MdMusicNote className={styles.icon} />
      </div>

      <span className={styles.name}>Music Platform</span>
    </div>
  );
};
