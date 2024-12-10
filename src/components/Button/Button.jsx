import styles from "./Button.module.css";

const Button = (props) => {
  const { isOutLine, icon, text } = props;

  return (
    <button className={isOutLine ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
