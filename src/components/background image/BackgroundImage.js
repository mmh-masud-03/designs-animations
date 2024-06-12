"use client";
import React, { useEffect, useRef } from "react";
import styles from "./BackgroundImage.module.css";

function BackgroundImage() {
  const bannerRef = useRef(null);

  useEffect(() => {
    const banner = bannerRef.current;
    for (let i = 0; i < 400; i++) {
      const block = document.createElement("div");
      block.classList.add(styles.blocks);
      block.style.animationDelay = `${i * 0.05}s`;
      banner.appendChild(block);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <section>
        <h2>Background Image</h2>
        <div className={styles.banner} ref={bannerRef}></div>
      </section>
    </div>
  );
}

export default BackgroundImage;
