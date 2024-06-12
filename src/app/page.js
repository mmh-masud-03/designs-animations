import styles from "./page.module.css";
import WavyCircle from "@/components/wavy circle loader/WavyCircle";
import BackgroundImage from "@/components/background image/BackgroundImage";

export default function Home() {
  return (
    <div>
      <backgroundImage />
      <WavyCircle />
    </div>
  );
}
