import styles from "./MonthBar.module.css";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

function MonthBar() {
  return (
    <div className={styles.monthSelector}>
      <button>
        <BsFillCaretLeftFill />
      </button>
      <p>Mês Atual</p>
      <button>
        <BsFillCaretRightFill />
      </button>
    </div>
  );
}

export default MonthBar;
