import styles from "./ListItem.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import Banner from "./banners/Banner";

function ListItem({ icon, entryTitle, entryDate, entryValue, entryType }) {
  return (
    <li className={styles.container}>
      <div className={styles.banner}>
        <Banner
          icon={icon}
          title={entryTitle}
          subTitle={entryDate}
          value={entryValue}
          valueType={entryType}
          visibleBalance={true}
        />
      </div>
      <div className={styles.options}>
        <BsThreeDotsVertical />
      </div>
    </li>
  );
}

export default ListItem;
