
import styles from "./Features.module.css";
import FeatureCard from "../feature_card/FeatureCard";
import lipOneImg from "../../assets/lip1.png";
import faceImg from "../../assets/face.webp";
import LipTwoImg from "../../assets/lip2.webp";

const Features = () => {
  return (
    <div className={styles.features}>
      <FeatureCard image={lipOneImg} title="LIP" subtitle="SHOP" />
      <FeatureCard image={faceImg} title="FACE" subtitle="SHOP" />
      <FeatureCard image={LipTwoImg} title="KITS" subtitle="SHOP" />
    </div>
  );
};

export default Features;
