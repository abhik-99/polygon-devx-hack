import React, { ButtonHTMLAttributes } from "react";

const BlackButton = ({
  children,
  hoverFontColor = "text-base-content",
  ...otherProps
}: { hoverFontColor?: string } & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={
        "px-6 py-1 rounded-3xl border border-black hover:bg-black" +
        `hover:${hoverFontColor}`
      }
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default BlackButton;
