import classNames from "classnames";
import React from "react";

const OPEN_NAV_LINKS = [
  {
    name: "Home",
    hoverColor: "bg-primary",
  },
  {
    name: "About",
    hoverColor: "bg-secondary",
  },
  {
    name: "Team",
    hoverColor: "bg-accent",
  },
  {
    name: "Tech Stack",
    // hoverColor: "",
  },
];

export const OpenNavSection = () => {
  return (
    <div>
      <nav>
        {OPEN_NAV_LINKS.map((nav, idx) => (
          <button
            className={classNames(
              `btn bg-transparent border-none rounded-b-none hover:text-black`,
              nav.hoverColor && `hover:${nav.hoverColor}`
            )}
            key={"open-nav-" + idx}
          >
            {nav.name}
          </button>
        ))}
      </nav>
    </div>
  );
};
