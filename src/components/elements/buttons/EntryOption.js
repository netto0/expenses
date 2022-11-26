import styles from "./EntryOption.module.css";

function EntryOption({ icon, onClick, label }) {
  return (
    <div className={styles.button} onClick={onClick}>
      {icon}
    </div>
  );
}

export default EntryOption;
