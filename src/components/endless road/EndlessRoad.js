import React from "react";
import styles from "./EndlessRoad.module.css";
function EndlessRoad() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.infinite}>
        <div className={styles.shadow}></div>
      </div>
    </div>
  );
}

export default EndlessRoad;
