import styles from "./Contas.module.css";
import AccountBox from "../boxes/landingPageBlocks/myAccounts/AccountBox";
import EmptyAccBox from "../layout/EmptyAccBox";
import MonthBar from "../elements/MonthBar";
import { motion } from "framer-motion";

function Contas() {
  return (
    <motion.div
      className={styles.majorContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: .1}}
    >
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
    </motion.div>
  );
}

export default Contas;
