import styles from "./Input.module.css";

function Select(props) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{props.label}</label>
      <select
        className={styles.input}
        name={props.name}
        id={props.name}
      >{props.children}</select>
    </div>
  );
}

export default Select;
