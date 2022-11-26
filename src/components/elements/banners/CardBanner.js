import styles from "./CardBanner.module.css";
import { BsCreditCard } from "react-icons/bs";

// function AccBanner({id}) {
function CardBanner() {
  const id = {
    name: "NuBank",
    available: "6000,00",
    invoice: "0,00",
  };
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <BsCreditCard />
      </div>
      <div className={styles.cardId}>
        <div className={styles.information}>
          <div className={styles.cardName}>
            <p>{id.name}</p>
            <button className={styles.btn}>ver fatura</button>
          </div>
          <div className={styles.values}>
            <div>
              <span className={styles.subTitle}>Disponível</span>
              <p className={styles.valNumbers}>
                R$ <span className={styles.available}>{id.available}</span>
              </p>
            </div>
            <div>
              <span className={styles.subTitle}>Fatura atual</span>
              <p className={styles.valNumbers}>
                <span className={styles.invoice}>R$ {id.invoice}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBanner;
