import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";

import styles from "./Navbar.module.css";

import { Input } from "..";

import { urls } from "../../config/urls";

import logo from "../../images/logo.jpg";

const ThemeColors = {
  white: "#fff",
  transparent: "transparent",
  grey: "rgb(243, 244, 246)",
  dark: "rgb(55, 65, 81)",
};

const Theme = {
  default: {
    inactive: {
      background: ThemeColors.transparent,
      text: ThemeColors.dark,
    },
    active: {
      background: ThemeColors.dark,
      text: ThemeColors.white,
    },
  },
};

const NavState = {
  Active: "active",
  Inactive: "inactive",
};

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
  const [theme] = useState(Theme.default);
  const [navState, setNavState] = useState(NavState.Inactive);

  const handleWindowScroll = () => {
    if (window.scrollY >= 80) {
      setNavState(NavState.Active);
    } else {
      setNavState(NavState.Inactive);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleWindowScroll);

    return () => {
      document.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  return (
    <div className={styles.head}>
      <div
        style={{
          background: theme[navState].background,
          color: theme[navState].text,
        }}
        className={styles.content}
      >
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

        <div>
          <Input
            type="search"
            icon={<AiOutlineSearch size={20} />}
            placeholder="Input text"
          />
        </div>
      </div>
    </div>
  );
}
