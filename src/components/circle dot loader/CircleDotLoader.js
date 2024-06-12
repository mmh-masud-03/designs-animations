import React from "react";
import styles from "./CircleDotLoader.module.css";

function CircleDotLoader() {
  return (
    <div className={styles.wrapper}>
      <section>
        <div className={styles.loader}>
          {Array.from({ length: 20 }, (_, i) => (
            <span key={i} style={{ "--i": i + 1 }}></span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CircleDotLoader;
