import React from "react";
import styles from "./TubeLightText.module.css";
function TubeLightText() {
  return (
    <div className={styles.wrapper}>
      <h2 contentEditable="true" className={styles.box}>
        Text
      </h2>
    </div>
  );
}

export default TubeLightText;
