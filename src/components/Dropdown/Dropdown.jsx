import React from "react";

import { AiFillCheckCircle } from "react-icons/ai";

import { CSSTransition } from "react-transition-group";

import styles from "./Dropdown.module.css";
import fadeIn from "../../css/anim/fadeIn.module.css";
// import { checkFilterKeys } from "../../utils/checkFilterKeys";

export default function Dropdown({
  open,
  onClose,
  list,
  activeFilters,
  setActiveFilters,
  setFilterKeys,
}) {
  return (
    <CSSTransition in={open} classNames={fadeIn} timeout={75} unmountOnExit>
      <React.Fragment>
        <div className={styles.DropdownContent} onClick={onClose} />

        <div className={styles.Dropdown} onClick={onClose}>
          {list.map(({ id, label, filterKeys }) => (
            <button
              key={id}
              className={styles.Content}
              onClick={() => {
                setActiveFilters((prev) => {
                  // With KEYS
                  // if (!prev[filterKeys]) prev[filterKeys] = [];

                  // if (prev[filterKeys].includes(label))
                  //   prev[filterKeys] = prev[filterKeys].filter(
                  //     (per) => per !== label
                  //   );
                  // else prev[filterKeys].push(label);

                  // if (prev[filterKeys].length === 0) delete prev[filterKeys];
                  if (prev.includes(label))
                    prev = prev.filter((per) => per !== label);
                  else prev = [...prev, label];
                  return prev;
                });

                setFilterKeys((prev) => {
                  // With KEYS
                  if (!prev[filterKeys]) prev[filterKeys] = [];

                  if (prev[filterKeys].includes(label))
                    prev[filterKeys] = prev[filterKeys].filter(
                      (per) => per !== label
                    );
                  else prev[filterKeys].push(label);

                  if (prev[filterKeys].length === 0) delete prev[filterKeys];
                  return prev;
                });
              }}
            >
              {label}
              {activeFilters.includes(label) ? (
                <AiFillCheckCircle size={20} />
              ) : null}
            </button>
          ))}
        </div>
      </React.Fragment>
    </CSSTransition>
  );
}
