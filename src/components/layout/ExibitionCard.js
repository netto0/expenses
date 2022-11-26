import styles from "./ExibitionCard.module.css";

function Container(props) {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{props.title}</h4>
      <div className={styles.banners}>{props.children}</div>
    </div>
  );
}

export default Container;
