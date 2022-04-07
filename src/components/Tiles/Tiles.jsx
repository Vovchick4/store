import React, { useState } from "react";
import styles from "./Tiles.module.css";
import { NavLink } from "react-router-dom";
import image from "../../images/Home.webp";
import data from "../../data/data.json";

const path = "#";

const Tiles = () => {
  const [lenghtData, setLenghtData] = useState(3);

  function moreData() {
    if (lenghtData > data.length) return alert("MAX DATA");

    setLenghtData((prev) => prev + 3);
  }

  function lessData() {
    setLenghtData((prev) => prev - 3);
  }

  return (
    <div className={styles.tiles}>
      <div className={styles.tiles__container}>
        <div className={styles.tiles__body}>
          <div className={styles.tiles__column}>
            {data &&
              data.map(
                (da) =>
                  lenghtData >= da.id && (
                    <div className={styles.item__content}>
                      <NavLink
                        to={path}
                        className={`${styles.item__image} ${styles._ibg}`}
                      >
                        <img src={image} alt="Photo3" />
                      </NavLink>
                      <h5 className={styles.item__title}>Tile 3 Heading</h5>
                      <div className={styles.item__text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Consequatur asperiores ipsum quae cumque commodi
                        rerum sunt voluptate. Quam.
                      </div>
                    </div>
                  )
              )}
          </div>
        </div>
      </div>

      <div className={styles.tiles__btn}>
        {data.length > lenghtData && (
          <button onClick={moreData}>View more</button>
        )}
        {lenghtData !== 3 && <button onClick={lessData}>Collopase data</button>}
      </div>
    </div>
  );
};

export default Tiles;
