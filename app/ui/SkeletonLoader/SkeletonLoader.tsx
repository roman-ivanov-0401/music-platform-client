import { FC } from "react";

import styles from "./skeletonLoader.module.scss";
import { SkeletonLoaderProps } from "./skeletonLoader.types";

export const SkeletonLoader: FC<SkeletonLoaderProps> = ({
  width = "100%",
  height = "1rem",
  borderRadius = ".5rem",
  margin = "0"
}) => {
  return (
    <div
      className={styles.skeleton}
      style={{
        width,
        height,
        borderRadius,
        margin
      }}
    ></div>
  );
};
