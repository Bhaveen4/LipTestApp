
import styles from "./FeatureCard.module.css";

const FeatureCard = ({ image, title, subtitle }) => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.text}>
        <span className={styles.subtitle}>{subtitle}</span>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </div>
  );
};

export default FeatureCard;
