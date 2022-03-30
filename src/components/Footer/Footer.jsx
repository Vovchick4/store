import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import logo from "../../images/logo.jpg";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import linkedin from "../../images/linkedin2.svg";
import google from "../../images/google-plus.svg";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__top}>
                <div className={styles.footer__top__info}>
                    <div className={styles.info__title}>Branding stuff</div>
                    <div className={styles.info__subtitle}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit placeat explicabo.
                    </div>
                </div>
                <div className={styles.footer__top__logo}>
                    <img className={styles.logo} src={logo} alt="LOGO" />
                </div>
                <div className={styles.footer__top__icons}>
                    <img src={facebook} alt="facebook" className={styles.footer__icon} />
                    <img src={twitter} alt="twitter" className={styles.footer__icon} />
                    <img src={linkedin} alt="linkedin" className={styles.footer__icon} />
                    <img src={google} alt="google" className={styles.footer__icon} />
                </div>
            </div>
            <div className={styles.footer__line}></div>
            <div className={styles.footer__bottom}>
                <div className={styles.footer__bottom__body}>
                    <div className={styles.footer__bottom__text}>2020 Copyright All Right Reserved </div>
                </div>
            </div>
        </footer>
    );
}


export default Footer;