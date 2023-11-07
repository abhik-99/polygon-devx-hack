import classNames from "classnames";
import React, { ReactNode } from "react";
import styles from "./NavSection.module.css";
import Link from "next/link";
import { AuthButton } from "..";

const OPEN_NAV_LINKS = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Team",
  },
  {
    name: "Tech Stack",
  },
];

const CLOSED_NAV_LINKS = [
  {
    name: "Invest",
    path: "/funds",
  },
  {
    name: "Portfolio",
    path: "/dashboard",
  },
  {
    name: "Profile",
    path: "/profile",
  },
  {
    name: "Manage Wealth",
    path: "/asset-management",
  },
];

export const OpenNavSection = () => {
  return (
    <div>
      <nav>
        {OPEN_NAV_LINKS.map((nav, idx) => (
          <button
            className={classNames(styles["open-nav-link"])}
            key={"open-nav-" + idx}
          >
            {nav.name}
          </button>
        ))}
      </nav>
    </div>
  );
};

export const ClosedSideBar = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className={styles["closed-sidebar-parent"]}>
        <div className={styles["closed-sidebar"]}>
          {CLOSED_NAV_LINKS.map((link, idx) => (
            
            <Link href={link.path} key={"closed-nav-link-" + idx} className={styles["closed-sidebar-link"]}>
              {link.name}
            </Link>
          ))}
          <AuthButton />
        </div>
      </div>
      <div className={styles["closed-main"]}>{children}</div>
    </>
  );
};
