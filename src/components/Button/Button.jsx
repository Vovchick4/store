import React, { createElement } from "react";

import styles from "./Button.module.css";

export default function Button({
  type = "button",
  variant = "default",
  fullWidth = false,
  width = false,
  icon,
  children,
  onClick,
  as = "button",
  ...initialProps
}) {
  const classes = [styles[variant]];

  if (fullWidth) {
    classes.push(styles.fullWidth);
  } else if (width) classes.push(styles.width, styles.justBetWeen);

  return createElement(
    as,
    {
      type,
      className: classes.join(" "),
      onClick,
      ...initialProps,
    },
    <React.Fragment>
      <span className={styles.content}>{children}</span>
      {icon && <span className={styles.icon}>{icon}</span>}
    </React.Fragment>
  );
}
