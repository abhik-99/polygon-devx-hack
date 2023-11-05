import classNames from "classnames";
import React, { ButtonHTMLAttributes } from "react";

export const BlackButton = ({
  children,
  hoverFontColor = "text-base-content",
  ...otherProps
}: { hoverFontColor?: string } & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={classNames(
        "btn bg-transparent text-black normal-case px-8 py-0.5 rounded-3xl border border-black hover:bg-black",
        `hover:${hoverFontColor}`
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};
