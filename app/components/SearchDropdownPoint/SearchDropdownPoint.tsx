import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import styles from "./searchDropdownPoint.module.scss";
import { SearchDropdownPointProps } from "./searchDropdownPoint.types";

export const SearchDropdownPoint: FC<SearchDropdownPointProps> = ({
  className,
  loading = false,
  data,
  children,
}) => {
  if (loading) {
    return (
      <li className={cn(className, styles.searchDropdownPoint)}>{children}</li>
    );
  }
  return (
    <li className={cn(className, styles.searchDropdownPoint)}>
      <Link href={"/"}>
        <a>
          {data?.image ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_SERVER_URL}/${data.image}`}
              alt="Image"
              width="40"
              height="40"
              objectFit="cover"
            />
          ) : (
            <div className={styles.imagePlaceholder}></div>
          )}
          {children}
          <span className={styles.separator}>&middot;</span>
          <span className={styles.contentType}>{data?.type || ""}</span>
        </a>
      </Link>
    </li>
  );
};
