import styles from "./Container.module.css";

function Container(props) {
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.blur} ${props.blur && styles.active}`}></div>
        <div className={`${styles.content} ${props.blur && styles.active}`}>{props.children}</div>
        {/* <div className={styles.content}>{props.children}</div> */}
      </div>
    </>
  );
}

export default Container;
