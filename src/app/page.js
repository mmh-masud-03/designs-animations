import styles from "./page.module.css";
import WavyCircle from "@/components/wavy circle loader/WavyCircle";
import BackgroundImage from "../components/background image/BackgroundImage";
import IconBackground from "@/components/icons background/IconBackground";

export default function Home() {
  return (
    <div>
      <IconBackground />
      <BackgroundImage />
      <WavyCircle />
    </div>
  );
}
