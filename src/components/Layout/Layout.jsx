import { Navbar } from "..";
import Footer from "../Footer";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.content}>
      <Navbar />

      <main>{children}</main>
      
      <Footer />
    </div>
  );
}
