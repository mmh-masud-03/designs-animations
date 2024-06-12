import React from "react";
import styles from "./IconBackground.module.css";
import {
  FaBicycle,
  FaBeer,
  FaApple,
  FaBell,
  FaCamera,
  FaCloud,
  FaCoffee,
  FaDollarSign,
  FaEnvelope,
  FaFire,
  FaGift,
  FaHeart,
  FaHome,
  FaKey,
  FaLock,
  FaMap,
  FaMusic,
  FaSearch,
  FaStar,
  FaThumbsUp,
} from "react-icons/fa";

const icons = [
  FaBicycle,
  FaBeer,
  FaApple,
  FaBell,
  FaCamera,
  FaCloud,
  FaCoffee,
  FaDollarSign,
  FaEnvelope,
  FaFire,
  FaGift,
  FaHeart,
  FaHome,
  FaKey,
  FaLock,
  FaMap,
  FaMusic,
  FaSearch,
  FaStar,
  FaThumbsUp,
];

function IconBackground() {
  return (
    <div className={styles.wrapper}>
      <section>
        {icons.map((IconComponent, index) => (
          <div key={index} className={styles.row}>
            <div>
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
            </div>
            <div>
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
              <IconComponent className={styles.icon} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default IconBackground;
