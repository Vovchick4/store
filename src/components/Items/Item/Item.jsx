import React from 'react';
import styles from "./Item.module.css";
import { NavLink } from 'react-router-dom';
import image from "../../../images/Home.webp";


const Item = (props) => {
    const path = `/catalog/${props.datas.id}`

    return (
        <div className={styles.item}>
            <div className={styles.item__body}>
                <div className={styles.item__body__header}>item {props.datas.id}</div>
                <div className={styles.item__container}>
                    <div className={styles.item__column}>
                        <div className={`${styles.column__image} ${styles._ibg}`}>
                            <img src={image} alt="Photo1" />
                        </div>
                        <h5 className={styles.column__title}>{props.datas.name}</h5>
                        <div className={styles.column__text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Consequatur asperiores ipsum quae cumque commodi rerum sunt
                            voluptate. Quam.
                        </div>
                        <div className={styles.column__price}>
                            <div><b>Price :</b></div>
                            <div className={styles.column__price__num}>$ {props.datas.price}</div>
                        </div>
                        <div className={styles.column__btn}>
                            <NavLink to={path}><button >View more</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Item;