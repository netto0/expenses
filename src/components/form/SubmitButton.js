import styles from "./SubmitButton.module.css";

function SubmitButton({ text, onClick, customClass }) {
  return (
    <input
      className={`${styles.btn} ${styles[customClass]}`}
      type="submit"
      value={text}
      onClick={onClick}
    />
  );
}

export default SubmitButton;
