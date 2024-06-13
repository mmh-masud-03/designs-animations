import React from "react";
import styles from "./BackgroundPulse.module.css";
function BackgroundPulse() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <div className={styles.bgPulse}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
    </div>
  );
}

export default BackgroundPulse;
