import styles from "./Installments.module.css";

import Input from "../../form/Input";
import Select from "../../form/Select";

function Installments(props) {
  return (
    <div className={styles.installments}>
      {" "}
      {/* Essa div só irá aparecer caso o "Parcelada" esteja marcado */}
      <div className={styles.qtde}>
        <Input placeholder="qtde" name="qtde" type="number" />
      </div>
      <div className={styles.break}>
        <Select>
          <option>Mensal</option>
          <option>Diário</option>
          <option>Semanal</option>
          <option>Trimestral</option>
          <option>Anual</option>
        </Select>
      </div>
    </div>
  );
}

export default Installments;
