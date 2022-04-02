import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import styles from "./Items.module.css";
import fadeIn from "../../css/anim/fadeIn.module.css";
// import { NavLink } from "react-router-dom";
import Item from "./Item/Item";

const Items = (props) => {
  //   const asus = props.data.filter((d) => d.id === 1);
  //   const acer = props.data.filter((d) => d.id === 2);
  //   console.log(asus);

  return (
    <TransitionGroup className={styles.items}>
      {props.data.map((e) => (
        <CSSTransition
          key={e.id}
          classNames={fadeIn}
          timeout={500}
          unmountOnExit
        >
          <Item data={props.data} datas={e} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default Items;
