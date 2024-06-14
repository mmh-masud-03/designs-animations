import styles from "./page.module.css";
import WavyCircle from "@/components/wavy circle loader/WavyCircle";
import BackgroundImage from "../components/background image/BackgroundImage";
import IconBackground from "@/components/icons background/IconBackground";
import CircleDotLoader from "@/components/circle dot loader/CircleDotLoader";
import TubeLightText from "@/components/tubelight text/TubeLightText";
import NeonButton from "@/components/neon buttons/NeonButton";
import EndlessRoad from "@/components/endless road/EndlessRoad";
import GradientShadow from "@/components/gradient shadow/GradientShadow";
import BackgroundPulse from "@/components/background pulse/BackgroundPulse";
import LeavesAnimation from "@/components/leaves animation/LeavesAnimation";
export default function Home() {
  return (
    <div>
      <LeavesAnimation />
      <BackgroundPulse />
      <GradientShadow />
      <EndlessRoad />
      <NeonButton />
      <TubeLightText />
      <CircleDotLoader />
      <IconBackground />
      {/* <BackgroundImage /> */}
      <WavyCircle />
    </div>
  );
}
