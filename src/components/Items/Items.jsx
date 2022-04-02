import React from 'react';
import styles from "./Items.module.css";
import {NavLink} from 'react-router-dom';
import Item from './Item/Item';

const Items = (props) => {
    /*<Item data={props.data} datas={asus} />
        <Item data={props.data} datas={acer} />
        <Item data={props.data} datas={asus}/>
        <Item data={props.data} datas={acer} />
        */ 
    const asus = props.data.filter((d) => d.id === 1)
    const acer = props.data.filter((d) => d.id === 2)
    
    return (
        <div className={styles.items}>
        {props.data.map(e => <Item data={props.data} datas={e} ></Item>)}

        </div>
    )
}


export default Items;