import styles from "./AddEntry.module.css";

import Input from "../../form/Input";
import Select from "../../form/Select";

import { HiOutlineRefresh } from "react-icons/hi";
import { BsChatLeftText, BsPaperclip } from "react-icons/bs";
import { BiLike, BiDislike } from "react-icons/bi";
import EntryOption from "../../elements/buttons/EntryOption";
import DoubleOptions from "../../elements/buttons/DoubleOptions";
import Installments from "./Installments";
import SubmitButton from "../../form/SubmitButton";
import CloseButton from "../../elements/buttons/CloseButton";

function AddEntry({ setShowEntry, show, expense }) {

  return (
    // <div className={`${styles.container} ${styles.inactive}`}>
    <div
      className={`${styles.container} ${
        show ? styles.active : styles.inactive
      }`}
    >
      <h2 className={styles.title}>Nova {expense ? 'despesa' : 'receita'}</h2>
      <CloseButton func={setShowEntry} />

      <form>
        <Input label="Descrição" type="text" name="description" />
        <div className={styles.double}>
          <Input label="Valor" type="number" name="value" />
          <Input label="Data" type="date" name="date" />
        </div>
        <div className={styles.double}>
          <Select label="Conta/Cartão">
            <option>Conta1</option>
            <option>Conta2</option>
            <option>Conta3</option>
          </Select>
          <Select label="Categoria">
            <option>Categoria1</option>
            <option>Categoria2</option>
            <option>Categoria3</option>
          </Select>
        </div>
        <div className={styles.buttons}>
          <EntryOption icon={<HiOutlineRefresh />} />
          <EntryOption icon={<BsChatLeftText />} />
          <EntryOption icon={<BsPaperclip />} />
          <EntryOption icon={<BiLike />} />
        </div>
        <div>
          {" "}
          {/* Essa div só irá aparecer caso o repeat esteja marcado */}
          <div className={styles.dependent}>
            <div className={styles.installments}>
              <DoubleOptions opt1="Parcelada" opt2="Fixa Mensal" highlightColor={expense ? 'activeRed' : 'activeGreen'}/>
              <Installments />
            </div>
            <div className={styles.installments}>
              <Input
                type="text"
                label="Observação"
                name="note"
                placeholder="Digite sua observação"
              />
            </div>
          </div>
        </div>
        <div className={styles.submit}>
          <SubmitButton text="Enviar" customClass={expense ? 'red' : 'green'} />
        </div>
      </form>
    </div>
  );
}

export default AddEntry;
