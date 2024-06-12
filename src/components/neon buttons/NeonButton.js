import React from "react";
import styles from "./NeonButton.module.css";
function NeonButton() {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Neon Button
        </a>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Neon Button
        </a>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Neon Button
        </a>
      </div>
    </div>
  );
}

export default NeonButton;
