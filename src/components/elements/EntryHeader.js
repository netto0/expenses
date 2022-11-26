import styles from "./EntryHeader.module.css";

import { ImSearch } from "react-icons/im";
import { FaFilter } from "react-icons/fa";
import {BsThreeDotsVertical} from 'react-icons/bs'

function EntryHeader({title, value}) {
  return (
    <div className={styles.header}>
      <div className={styles.value}>
        <h2>{title}</h2>
        <p>R${value}</p>
      </div>
      <div className={styles.icons}>
        <ImSearch />
        <FaFilter />
        <BsThreeDotsVertical />
      </div>
    </div>
  );
}

export default EntryHeader;
