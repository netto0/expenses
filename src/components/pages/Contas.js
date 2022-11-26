import styles from "./Contas.module.css";
import AccountBox from "../boxes/landingPageBlocks/myAccounts/AccountBox";
import EmptyAccBox from "../layout/EmptyAccBox";
import MonthBar from "../elements/MonthBar"

function Contas() {
  return (
    <div className={styles.container}>
      <MonthBar />
      <div className={styles.boxes}>
        <AccountBox
          title="Conta 1"
          opBalance="-1000,00"
          revenues="1000,00"
          expenses="1000,00"
          curBalance="1000,00"
          expBalance="1000,00"
        />
        <EmptyAccBox />
        <EmptyAccBox />
        <EmptyAccBox />
        <EmptyAccBox />
        <EmptyAccBox />
      </div>
    </div>
  );
}

export default Contas;
