import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

import { urls } from "../../config/urls";

import logo from "../../images/logo.jpg";

const links = [
  {
    path: urls.home,
    label: "Home",
  },
  {
    path: urls.catalog,
    label: "Catalog",
  },
  {
    path: urls.cart,
    label: "Cart",
  },
];
export default function Navbar() {
  return (
    <div className={styles.head}>
      <div className={styles.content}>
        <div>
          <img className={styles.logo} src={logo} alt="LOGO" />
        </div>

        <div className={styles.contentLinks}>
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                !isActive ? styles.link : styles.linkActive
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div></div>
      </div>
    </div>
  );
}
