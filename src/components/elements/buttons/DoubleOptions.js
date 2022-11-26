import styles from "./DoubleOptions.module.css";

function DoubleOptions({opt1, opt2, highlightColor}) {
  return (
    <div className={styles.doubleButton}>
      <div className={`${styles.option} ${styles.active} ${styles[highlightColor]}`}>{opt1}</div>
      <div className={`${styles.option}`}>{opt2}</div>
    </div>
  );
}

export default DoubleOptions;
