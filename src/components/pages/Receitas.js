import styles from "./Receitas.module.css";

import EntryHeader from "../elements/EntryHeader";
import ListItem from "../elements/ListItem";
import MonthBar from "../elements/MonthBar"

import { FiShoppingBag } from "react-icons/fi";

function Receitas() {
  return (
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
  );
}

export default Receitas;
