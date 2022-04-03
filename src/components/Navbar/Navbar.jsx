import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";

import styles from "./Navbar.module.css";

import { Input } from "..";

import { urls } from "../../config/urls";
import { FilterSearchContext } from "../../context/FilterSearch.context";

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

  const location = useLocation();

  const { searchText, setSearchText } = useContext(FilterSearchContext);

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

  function clearQuery() {
    setSearchText("");
  }

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

        <div className={styles.searchBarContent}>
          {location.pathname === urls.catalog && (
            <React.Fragment>
              <Input
                type="search"
                icon={<AiOutlineSearch size={20} />}
                placeholder="Input text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />

              {searchText && (
                <GiCancel
                  className={styles.searchIcon}
                  size={20}
                  onClick={clearQuery}
                />
              )}
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}
