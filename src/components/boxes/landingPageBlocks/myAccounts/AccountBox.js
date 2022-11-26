import styles from "./AccountBox.module.css";
import ExibitionCard from "../../../layout/ExibitionCard";
import { SlWallet } from "react-icons/sl";

function AccountBox(props) {
  return (
    <div className={styles.majorContainer}>
      <ExibitionCard>
        <div className={styles.title}>
          <div className={styles.icon}>
            <SlWallet />
          </div>
          <h2>{props.title}</h2>
        </div>
        <div className={styles.bothSides}>
          <div className={styles.leftSide}>
            <p>Saldo Inicial</p>
            <p>Receitas</p>
            <p>Despesas</p>
            <p>Saldo Atual</p>
            <p className={styles.expected}>Saldo Previsto</p>
          </div>
          <div className={styles.rightSide}>
            <p
              className={
                parseInt(props.opBalance) > 0 ? styles.green : styles.red
              }
            >
              R$ {props.opBalance}
            </p>
            <p className={parseInt(props.revenues) > 0 && styles.green}>
              R$ {props.revenues}
            </p>
            <p className={parseInt(props.expenses) > 0 && styles.red}>
              R$ {props.expenses}
            </p>
            <p
              className={
                parseInt(props.curBalance) > 0 ? styles.green : styles.red
              }
            >
              R$ {props.curBalance}
            </p>
            <p
              className={
                parseInt(props.expBalance) > 0 ? styles.green : styles.red
              }
            >
              R$ {props.expBalance}
            </p>
          </div>
        </div>
      </ExibitionCard>
    </div>
  );
}

export default AccountBox;
