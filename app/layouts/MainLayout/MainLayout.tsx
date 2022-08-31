import { FC } from "react";
import {
  MdHomeFilled,
  MdLibraryMusic,
  MdRadio,
  MdShowChart,
} from "react-icons/md";

import { NavPointsProps } from "@/components/NavPoints";
import { Navbar } from "@/components/Navbar";
import { Player } from "@/components/Player";

import styles from "./mainLayout.module.scss";
import { MainLayoutProps } from "./mainLayout.types";
import { Search } from "@/components/Search";

const navPoints: NavPointsProps[] = [
  {
    points: [
      { Icon: MdHomeFilled, link: "/", name: "Home" },
      { Icon: MdShowChart, link: "/charts", name: "Charts" },
      { Icon: MdLibraryMusic, link: "/library", name: "Library" },
      { Icon: MdRadio, link: "/radios", name: "Radio" },
    ],
  },
];

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <Navbar navPoints={navPoints} />
      <Search placeholder="Search..." dropdown={false} callback={() => {}}/>
      <div className={styles.mainContainer}>
      {children}
      </div>
      <Player />
    </div>
  );
};
