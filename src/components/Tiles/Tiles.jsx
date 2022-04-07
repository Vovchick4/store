import React, { useState } from "react";
import styles from "./Tiles.module.css";
import { NavLink } from "react-router-dom";
import image from "../../images/Home.webp";

const path = "#";

const Tiles = (props) => {
  return (
    <div className={styles.tiles__column}>
      <div className={styles.tiles__column__item}>
        <div className={styles.item__content}>
          <a href={path} className={`${styles.item__image} ${styles._ibg}`}>
            <img src={props.data.image} alt="Photo1" />
          </a>
          <h5 className={styles.item__title}>Tile {props.data.id} Heading</h5>
          <div className={styles.item__text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur asperiores ipsum quae cumque commodi rerum sunt
            voluptate. Quam.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiles;
