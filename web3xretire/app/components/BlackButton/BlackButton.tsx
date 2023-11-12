import classNames from "classnames";
import styles from "./BlackButton.module.css";
import React, { ButtonHTMLAttributes } from "react";

export const BlackButton = ({
  children,
  hoverFontColor = "orange",
  ...otherProps
}: {
  hoverFontColor?: "orange" | "green" | "";
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={classNames(
        styles.btn,
        styles["hover-" + hoverFontColor]
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};
