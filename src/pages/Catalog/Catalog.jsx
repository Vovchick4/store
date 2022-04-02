import { useState } from "react";

import { BiDownArrow } from "react-icons/bi";

import { Layout, Container, Button, Dropdown } from "../../components";

import styles from "./Catalog.module.css";
import data from "../../data/data.json";
import Items from './../../components/Items/Items';

const sortFilter = [
  {
    id: 1,
    label: "Asc",
    onClick: null,
  },
  {
    id: 2,
    label: "Desc",
    onClick: null,
  },
];

const brandFilter = [
  {
    id: 1,
    label: "ASUS",
  },
  {
    id: 2,
    label: "Acer",
  },
];

const qualityFilter = [
  {
    id: 1,
    label: "Hight-Quality",
    onClick: null,
  },
  {
    id: 2,
    label: "Low-Quality",
    onClick: null,
  },
];

const filterState = {
  sortFilter: "SORT_FILTER",
  brandFilter: "BRANT_FILTER",
  qualityFilter: "QUALITY_FILTER",
};
export default function Catalog() {
  const [activeDrpDwn, setActiveDrpDwn] = useState(null);
  const [datas, setDatas] = useState(data);
  const [activeFilter, setActiveFilter] = useState("");

  function filterItems() {
    if (!activeFilter) return;

    const newItem = data.filter((d) => {
      return d.comp === activeFilter;
    });
    setDatas(newItem);
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
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
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
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
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
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
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
