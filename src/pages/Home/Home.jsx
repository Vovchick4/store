import { Layout, Container } from "../../components";
import TilesContainer from "../../components/Tiles/TilesContainer";

import image from "../../images/Home.webp";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Container>
        <div className={styles.content}>
          <div className={styles.flex}>
            <div className={styles.contentImage}>
              <img className={styles.img} src={image} alt="34k" />
            </div>

            <div className={styles.contentText}>
              <h1 className={styles.title}>Heading</h1>
              <p className={styles.subText}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Placeat quibusdam distinctio architecto hic veniam laudantium
                at, accusamus illum quas alias praesentium voluptatibus minus
                sequi iure ratione facere itaque quidem maxime!
              </p>
            </div>
          </div>
        </div>

        <TilesContainer />
      </Container>
    </Layout>
  );
}
