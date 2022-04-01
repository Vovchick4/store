import { CSSTransition } from "react-transition-group";

import styles from "./Input.module.css";
import fadeIn from "../../css/anim/fadeIn.module.css";

export default function Input({
  type,
  placeholder,
  value,
  onChange,
  icon,
  error,
  ...inputProps
}) {
  return (
    <div className={styles.container}>
      <input
        className={error ? styles.inputError : styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...inputProps}
      />

      {icon && <span className={styles.icon}>{icon}</span>}

      <CSSTransition
        in={!!error}
        unmountOnExit
        classNames={fadeIn}
        timeout={75}
      >
        <span className={styles.error}>{error}</span>
      </CSSTransition>
    </div>
  );
}
