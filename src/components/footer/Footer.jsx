
import styles from "./Footer.module.css";
import SignupBanner from "../signup_banner/SignupBanner";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <SignupBanner />
      <div className={styles.footerContent}>
        <div>
          <h4>SHOP</h4>
          <ul>
            <li>Lip</li>
            <li>Face</li>
            <li>Kits</li>
            <li>Shop All</li>
          </ul>
        </div>

        <div>
          <h4>ABOUT</h4>
          <ul>
            <li>Our Story</li>
            <li>Clinically Proven</li>
          </ul>
        </div>

        <div>
          <h4>HELP</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className={styles.socials}>
          <span>🌐</span>
          <span>📸</span>
          <span>🎵</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
