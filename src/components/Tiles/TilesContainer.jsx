import React, { useState } from "react";
import Tiles from "./Tiles";
import tilesData from "../../data/tilesData.json";
import styles from "./Tiles.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import fadeIn from "../../css/anim/fadeIn.module.css";

const TilesContainer = () => {
  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prev) => prev + 3);
  };

  const collapseItems = () => {
    setVisible((prev) => prev - 3);
  };

  return (
    <div className={styles.tiles}>
      <div className={styles.tiles__container}>
        <TransitionGroup className={styles.tiles__body}>
          {tilesData.slice(0, visible).map((e) => (
            <CSSTransition
              key={e.id}
              classNames={fadeIn}
              timeout={500}
              unmountOnExit
            >
              <Tiles tilesData={tilesData} data={e} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <div className={styles.tiles__btn}>
        {tilesData.length > visible && (
          <button onClick={showMoreItems}>View more</button>
        )}
        {visible !== 3 && (
          <button onClick={collapseItems}>Collapse Data</button>
        )}
      </div>
    </div>
  );
};

export default TilesContainer;
