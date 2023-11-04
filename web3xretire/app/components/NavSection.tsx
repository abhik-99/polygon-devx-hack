import React from "react";
const OPEN_NAV_LINKS = [
  {
    name: "Home",
    hoverColor: "bg-orange-500"
  },
  {
    name: "About",
    hoverColor: "bg-violet-600"
  },
  {
    name: "Team",
    hoverColor: "bg-blue-600"
  },
  {
    name: "Tech Stack",
    hoverColor: ""
  },
];

const OpenNavSection = () => {
  return (
    <div>
      <nav>
        {OPEN_NAV_LINKS.map((nav, idx) => (
          <button className={`btn bg-transparent border-none hover:${nav.hoverColor} hover:text-black rounded-b-none`} key={"open-nav-" + idx}>
            {nav.name}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default OpenNavSection;
