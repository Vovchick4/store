import { Layout, Container } from "../../components";
import image from "../../images/Home.webp"
import styles from "./CatalogItem.module.css";

export default function CatalogItem() {
  return (
    <Layout>
      <Container>
        <div className={styles.catalogItem}>
          <div className={styles.catalogItem__top}>
            <div className={styles.top__left}>
              <img src={image} alt="pcPhoto"></img>
            </div>
            <div className={styles.top__right}>
              <div className={styles.top__right__characteristic}>characteristic</div>
              <div className={styles.top__right__title}>title</div>
              <div className={styles.top__right__subtitle}>subtitle</div>
              <div className={styles.top__right__fields}>
              <div className={styles.countFields}>count Field</div>
                <div className={styles.selectFields}>selected field</div>
              </div>
            </div>
          </div>
          <div className={styles.catalogItem__bottom}>
            <div className={styles.bottom__left}>
              <div className={styles.bottom__left__price}>Price : $2450</div>
            </div>
            <div className={styles.bottom__right}>
              <div className={styles.bottom__right__goBackBtn}>
                <button>go back</button>
              </div>
              <div className={styles.bottom__right__addBtn}>
                <button>add to cart</button>
                </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
