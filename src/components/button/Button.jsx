
import styles from "./Button.module.css";

const Button = ({ children, onClick, btnStyle }) => {
  return (
    <button className={btnStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

