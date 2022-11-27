import React from "react";
import styles from "./loader.module.css";
import { useSelector } from "react-redux";
const Loader = () => {
  const { theme } = useSelector((state: any) => state.getThemeReducer);
  return (
    <div
      className={
        theme ? `${styles.loading} ${styles.loadingDark}` : styles.loading
      }
    >
      <div>
        <div className={styles.bounce}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
