import styles from "./CardButton.module.css";

function CardButton({ icon, color, title, func }) {
  return (
    <div className={styles.container} onClick={func}>
      <div className={`${styles[color]}`}>{icon}</div>
      <p>{title}</p>
    </div>
  );
}

export default CardButton;
