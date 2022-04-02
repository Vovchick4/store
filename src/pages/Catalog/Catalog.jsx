import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { BiDownArrow } from "react-icons/bi";

import { Layout, Container, Button, Dropdown } from "../../components";

import styles from "./Catalog.module.css";
import scaleIn from "../../css/anim/scaleIn.module.css";
import data from "../../data/data.json";
import Items from './../../components/Items/Items';

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
    label: "Acer",
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
  const [datas, setDatas] = useState(data.sort((a, b) => a.price - b.price));
  const [filterKeys, setFilterKeys] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);

  function filterBrand(array) {
    return array.filter(
      (arr) =>
        activeFilters.includes(arr.company) ||
        activeFilters.includes(arr.quality)
    );
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

    let res = [...data];

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

          <div>
            <Button onClick={filterItems} variant="outline">
              Apply
            </Button>
          </div>
        </div>

        <Items data={datas}/>
      </Container>
    </Layout>
  );
}
