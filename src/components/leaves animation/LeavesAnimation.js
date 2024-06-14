import styles from "./LeavesAnimation.module.css";
import Image from "next/image";
function LeavesAnimation() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <div className={styles.set}>
          <div>
            <Image
              src={"/assets/leaves/leaf1.jpg"}
              width={200}
              height={200}
              alt="image"
            />
          </div>
          <div>
            <Image
              src={"/assets/leaves/leaf2.png"}
              width={200}
              height={200}
              alt="image"
            />
          </div>
          <div>
            <Image
              src={"/assets/leaves/leaf3.png"}
              width={200}
              height={200}
              alt="image"
            />
          </div>
          <div>
            <Image
              src={"/assets/leaves/leaf1.jpg"}
              width={200}
              height={200}
              alt="image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default LeavesAnimation;
