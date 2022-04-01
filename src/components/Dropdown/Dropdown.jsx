import React from "react";

import { AiFillCheckCircle } from "react-icons/ai";

import { CSSTransition } from "react-transition-group";

import styles from "./Dropdown.module.css";
import fadeIn from "../../css/anim/fadeIn.module.css";

export default function Dropdown({
  open,
  onClose,
  list,
  activeFilter,
  setActiveFilter,
}) {
  return (
    <CSSTransition in={open} classNames={fadeIn} timeout={75} unmountOnExit>
      <React.Fragment>
        <div className={styles.DropdownContent} onClick={onClose} />

        <div className={styles.Dropdown} onClick={onClose}>
          {list.map(({ id, label, onClick }) => (
            <button
              key={id}
              className={styles.Content}
              onClick={() => setActiveFilter(label)}
            >
              {label}
              {activeFilter === label && <AiFillCheckCircle size={20} />}
            </button>
          ))}
        </div>
      </React.Fragment>
    </CSSTransition>
  );
}
