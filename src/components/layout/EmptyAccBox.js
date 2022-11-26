import styles from "./EmptyAccBox.module.css";
import {BsPlusCircleDotted} from "react-icons/bs"

function EmptyAccBox() {
  return (
    <div className={styles.container}>
      <BsPlusCircleDotted />
      <span>Criar nova conta</span>
    </div>
  );
}

export default EmptyAccBox;
