import { FC, useState } from "react";

import { Logo } from "@/ui/Logo";

import cn from "classnames"

import { NavPoints } from "../NavPoints";

import styles from "./navbar.module.scss";
import { NavbarProps } from "./navbar.types";
import { MobileNavbarToggler } from "@/ui/MobileNavbarToggler";
import { MdClose } from "react-icons/md";

export const Navbar: FC<NavbarProps> = ({ navPoints }) => {
  const [open, setOpen] = useState<boolean | "start">("start");
  return (
    <>
    <div className={cn({
      [styles.navbar]: true,
      [styles.open]: open && open != "start",
      [styles.close]: !open,
    })}>
      <Logo />
      <button className={styles.closeButton} onClick={() => setOpen(false)}><MdClose/></button>
      {navPoints.map(({ points }) => (
        <NavPoints points={points} key={points.join()} />
      ))}
    </div>
    <MobileNavbarToggler onClick={() => {setOpen(true)}}/>
    </>
  );
};
