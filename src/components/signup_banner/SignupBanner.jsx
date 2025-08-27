import React from "react";
import styles from "./SignupBanner.module.css";

const SignupBanner = () => {
  return (
    <div className={styles.signupContainer}>
      <h2 className={styles.heading}>GET ON THE VIP LIST</h2>
      <p className={styles.subtext}>
        Sign up for 15% off and be the first to know about our latest offers & news
      </p>
      <div className={styles.form}>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <button>Sign Up</button>
      </div>
      <p className={styles.policy}>
        *By signing up, you agree to our Privacy Policy.
      </p>
    </div>
  );
};

export default SignupBanner;
