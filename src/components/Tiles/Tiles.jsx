import React from "react";
import styles from "./Tiles.module.css";
import image from "../../images/Home.webp";

const Tiles = () => {
    return (
        <div className={styles.tiles}>
            <div className={styles.tiles__container}>
                <div className={styles.tiles__body}>
                    <div className={styles.tiles__column}>
                        <div className={styles.tiles__column__item}>
                            <div className={styles.item__content}>
                            <a className={`${styles.item__image} ${styles._ibg}`}><img src={image}
                                alt="Photo1" /></a>
                                    <h5 className={styles.item__title}>Tile 1 Heading</h5>
                                <div className={styles.item__text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Consequatur asperiores ipsum quae cumque commodi rerum sunt voluptate. Quam.

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tiles__column}>
                        <div className={styles.tiles__column__item}>
                            <div className={styles.item__content}>
                            <a className={`${styles.item__image} ${styles._ibg}`}><img src={image}
                                alt="Photo2" /></a>
                                    <h5 className={styles.item__title}>Tile 2 Heading</h5>
                                <div className={styles.item__text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Consequatur asperiores ipsum quae cumque commodi rerum sunt voluptate. Quam.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tiles__column}>
                        <div className={styles.tiles__column__item}>
                            <div className={styles.item__content}>
                            <a className={`${styles.item__image} ${styles._ibg}`} ><img src={image}
                                alt="Photo3" />
                            </a>
                                    <h5 className={styles.item__title}>Tile 3 Heading</h5>
                                <div className={styles.item__text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Consequatur asperiores ipsum quae cumque commodi rerum sunt voluptate. Quam.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tiles__btn}>
                        <button>View more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tiles
