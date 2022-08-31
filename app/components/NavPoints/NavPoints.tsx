import { FC } from "react";

import { NavPoint } from "../NavPoint";

import styles from "./navPoints.module.scss";
import { NavPointsProps } from "./navPoints.types";

export const NavPoints: FC<NavPointsProps> = ({ points }) => {
  return (
    <div className={styles.navPoints}>
      {points.map(({ name, link, Icon }) => (
        <NavPoint name={name} link={link} Icon={Icon} key={link} />
      ))}
    </div>
  );
};
