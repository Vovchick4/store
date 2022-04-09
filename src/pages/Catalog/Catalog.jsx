import React, { useContext, useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import axios from "axios";

import { BiDownArrow } from "react-icons/bi";

import { Layout, Container, Button, Dropdown, Loader } from "../../components";

import styles from "./Catalog.module.css";
import scaleIn from "../../css/anim/scaleIn.module.css";
import { FilterSearchContext } from "../../context/FilterSearch.context";

import data from "../../data/data.json";
import Items from "./../../components/Items/Items";

const sortFilter = [
  {
    id: 1,
    label: "Asc",
    filterKeys: "sortFilter",
  },
  {
    id: 2,
    label: "Desc",
    filterKeys: "sortFilter",
  },
];

const brandFilter = [
  {
    id: 1,
    label: "ASUS",
    filterKeys: "brandFilter",
  },
  {
    id: 2,
    label: "ACER",
    filterKeys: "brandFilter",
  },
];

const qualityFilter = [
  {
    id: 1,
    label: 3,
    filterKeys: "qualityFilter",
  },
  {
    id: 2,
    label: 4,
    filterKeys: "qualityFilter",
  },
];

const filterState = {
  sortFilter: "SORT_FILTER",
  brandFilter: "BRANT_FILTER",
  qualityFilter: "QUALITY_FILTER",
};
export default function Catalog() {
  const [activeDrpDwn, setActiveDrpDwn] = useState(null);
  const [datas, setDatas] = useState([]);
  const [filterKeys, setFilterKeys] = useState([]);
  let [activeFilters, setActiveFilters] = useState([]);
  const [loading, setLoading] = useState(false);

  const { searchText, setSearchText } = useContext(FilterSearchContext);

  useEffect(() => {
    if (!searchText.trim()) {
      setDatas(data);
      return;
    }

    setDatas(
      data.filter((item) =>
        Object.values(item)
          .join("")
          .trim()
          .toLowerCase()
          .includes(searchText.trim().toLowerCase())
      )
    );
  }, [searchText, setSearchText]);

  useEffect(() => {
    fetchAllDatas();
  }, []);

  function fetchAllDatas() {
    setLoading(true);

    axios({
      url: `/items`,
      method: "GET",
    })
      .then((res) => setDatas(res.data))
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  }

  function filterBrand(array) {
    return array.filter((arr) => {
      // activeFilters = activeFilters.join("/").toLowerCase().split("/");

      return (
        activeFilters.includes(arr.company) ||
        activeFilters.includes(arr.quality)
      );
    });
  }

  function sortCompByPrice(arr) {
    return arr.sort((a, b) => a.price - b.price);
  }

  function sortCompByPriceDesc(arr) {
    return arr.sort((a, b) => b.price - a.price);
  }

  // function filterBrand(array) {
  //   return array.filter((arr) =>
  //     activeFilters["brandFilter"].includes(arr.company)
  //   );
  // }

  // function filterQuality(array) {
  //   return array.filter((arr) =>
  //     activeFilters["qualityFilter"].includes(arr.quality)
  //   );
  // }

  function filterItems() {
    if (!activeFilters) return;

    let res = JSON.parse(JSON.stringify(datas));
    console.log(res);

    // MBY TEST
    // console.log(activeFilters.hasOwnProperty(Object.keys(activeFilters)));

    // Alt TEST
    // if (activeFilters.hasOwnProperty("brandFilter")) {
    //   res = filterBrand(res);
    // } else if (activeFilters.hasOwnProperty("qualityFilter")) {
    //   res = filterQuality(res);
    // }

    if (
      filterKeys.hasOwnProperty("brandFilter") ||
      filterKeys.hasOwnProperty("qualityFilter")
    ) {
      res = filterBrand(res);
    }

    if (activeFilters.includes("Asc")) {
      res = sortCompByPrice(res);
    } else if (activeFilters.includes("Desc")) {
      res = sortCompByPriceDesc(res);
    }

    // res = filterQuality(res);
    // const newItem = data.filter((d) => {
    //   return d.comp === activeFilter;
    // });
    setDatas(res);
  }

  function openSortFilter() {
    setActiveDrpDwn(filterState.sortFilter);
  }

  function openBrandFilter() {
    setActiveDrpDwn(filterState.brandFilter);
  }

  function openQualityFilter() {
    setActiveDrpDwn(filterState.qualityFilter);
  }

  function onClose() {
    setActiveDrpDwn(null);
  }

  function clearFilters() {
    fetchAllDatas();
    setFilterKeys([]);
    setActiveFilters([]);
  }

  return (
    <Layout>
      <Container>
        <div className={styles.content}>
          <div className={styles.filterContent}>
            <div className={styles.drpDwn}>
              <Button
                variant="outline"
                icon={<BiDownArrow size={20} />}
                width
                onClick={openSortFilter}
              >
                sortFilter
              </Button>

              <Dropdown
                open={activeDrpDwn === filterState.sortFilter}
                onClose={onClose}
                list={sortFilter}
                activeFilters={activeFilters}
                setActiveFilters={setActiveFilters}
                setFilterKeys={setFilterKeys}
              />
            </div>

            <div className={styles.drpDwn}>
              <Button
                variant="outline"
                icon={<BiDownArrow size={20} />}
                width
                onClick={openBrandFilter}
              >
                brandFilter
              </Button>

              <Dropdown
                open={activeDrpDwn === filterState.brandFilter}
                onClose={onClose}
                list={brandFilter}
                activeFilters={activeFilters}
                setActiveFilters={setActiveFilters}
                setFilterKeys={setFilterKeys}
              />
            </div>

            <div className={styles.drpDwn}>
              <Button
                variant="outline"
                icon={<BiDownArrow size={20} />}
                width
                onClick={openQualityFilter}
              >
                qualityFilter
              </Button>

              <Dropdown
                open={activeDrpDwn === filterState.qualityFilter}
                onClose={onClose}
                list={qualityFilter}
                activeFilters={activeFilters}
                setActiveFilters={setActiveFilters}
                setFilterKeys={setFilterKeys}
              />
            </div>
          </div>

          <div style={{ display: "flex", gap: "20px" }}>
            <Button variant="outline" onClick={clearFilters}>
              Clear FIlters
            </Button>
            <Button onClick={filterItems} variant="outline">
              Apply
            </Button>
          </div>
        </div>

        <TransitionGroup className={styles.filter}>
          {activeFilters.map((text) => (
            <CSSTransition
              key={text}
              timeout={300}
              classNames={scaleIn}
              unmountOnExit
            >
              <p className={styles.filterCard}>{text}</p>
            </CSSTransition>
          ))}
        </TransitionGroup>

        {loading && <Loader />}

        {!loading && <Items data={datas} />}
      </Container>
    </Layout>
  );
}
