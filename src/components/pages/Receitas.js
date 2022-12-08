import styles from "./Receitas.module.css";

import EntryHeader from "../elements/EntryHeader";
import ListItem from "../elements/ListItem";
import MonthBar from "../elements/MonthBar";
import { motion } from "framer-motion";

import { FiShoppingBag } from "react-icons/fi";

function Receitas() {
  return (
    <motion.div
      className={styles.majorContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      <div className={styles.container}>
        <EntryHeader title="Receitas" value="123,11" />
        <MonthBar />
        <ul>
          <ListItem
            icon={<FiShoppingBag />}
            entryTitle="Nome Da Receita"
            entryDate="17/11/2022"
            entryValue="123,12"
            entryType="revenue"
          />
          <ListItem
            icon={<FiShoppingBag />}
            entryTitle="Nome Da Receita"
            entryDate="17/11/2022"
            entryValue="123,12"
            entryType="revenue"
          />
          <ListItem
            icon={<FiShoppingBag />}
            entryTitle="Nome Da Receita"
            entryDate="17/11/2022"
            entryValue="123,12"
            entryType="revenue"
          />
        </ul>
      </div>
    </motion.div>
  );
}

export default Receitas;
