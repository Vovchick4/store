import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiDownArrow } from "react-icons/bi";

import { Layout, Container, Button, Input, Dropdown } from "../../components";
import image from "../../images/Home.webp";
import styles from "./CatalogItem.module.css";
import data from "../../data/data.json";

export default function CatalogItem() {
  const [openDropDwon, setOpenDropDwon] = useState(false);

  const { productId } = useParams();
  const nav = useNavigate();
  const datas = data.filter((d) => d.id === Number(productId));

  function openDropDown() {
    setOpenDropDwon(true);
  }

  function onClose() {
    setOpenDropDwon(false);
  }

  return (
    <Layout>
      <Container>
        <div className={styles.catalogItem}>
          <div className={styles.catalogItem__top}>
            <div className={styles.top__left}>
              <img src={image} alt="pcPhoto"></img>
            </div>
            <div className={styles.top__right}>
              <div className={styles.top__right__characteristic}>
                <div className={styles.characteristic}>1 characteristic</div>
                <div
                  className={`${styles.characteristic} ${styles.characteristic__blue}`}
                >
                  2 characteristic
                </div>
              </div>
              <div className={styles.top__right__title}>{datas[0].name}</div>
              <div className={styles.top__right__subtitle}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                dolores laborum, delectus incidunt odio facilis minima
                voluptatum excepturi exercitationem, nisi vel rem error quod in
                blanditiis esse quidem vitae obcaecati. Vero dolores laborum,
                delectus incidunt odio.
              </div>
              <div className={styles.top__right__fields}>
                <div className={styles.countFields}>
                  <label className={styles.fieldLabel}>Countable Field</label>
                  <Input placeholder="653..." />
                </div>
                <div className={styles.selectFields}>
                  <label className={styles.fieldLabel}>Selected Field</label>

                  <div style={{ position: "relative", marginTop: 10 }}>
                    <Button
                      type="button"
                      variant="select"
                      width
                      icon={<BiDownArrow size={20} />}
                      onClick={openDropDown}
                    >
                      Select field
                    </Button>

                    <Dropdown
                      open={openDropDwon}
                      list={[
                        { id: 1, label: "1" },
                        { id: 2, label: "1" },
                      ]}
                      onClose={onClose}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.catalogItem__bottom}>
            <div className={styles.bottom__left}>
              <div className={styles.bottom__left__price}>
                Price : ${datas[0].price}
              </div>
            </div>
            <div className={styles.bottom__right}>
              <div className={styles.bottom__right__goBackBtn}>
                <Button onClick={() => nav(-1)}>Go back</Button>
              </div>
              <div className={styles.bottom__right__addBtn}>
                <Button>Add to cart</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
