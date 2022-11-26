import Input from "../../form/Input";
import Select from "../../form/Select";
import styles from "./AddTransf.module.css";

import { HiOutlineRefresh } from "react-icons/hi";
import { BsChatLeftText, BsPaperclip } from "react-icons/bs";
import { BiLike, BiDislike } from "react-icons/bi";
import EntryOption from "../../elements/buttons/EntryOption";
import SubmitButton from "../../form/SubmitButton";
import CloseButton from "../../elements/buttons/CloseButton";

function AddTransf({ show, toggleShowTransf }) {
  return (
    <div
      className={`${styles.container} ${
        show ? styles.active : styles.inactive
      }`}
    >
      <CloseButton func={toggleShowTransf} />
      <h2 className={styles.title}>Transferência entre contas</h2>
      <form>
        <Select label="Saiu da conta">
          <option>Conta1</option>
          <option>Conta2</option>
        </Select>
        <Select label="Entrou da conta">
          <option>Conta1</option>
          <option>Conta2</option>
        </Select>
        <Input label="Descrição" placeholder="Transferência" />
        <div className={styles.double}>
          <Input label="Valor" type="number" />
          <Input label="Data" type="date" />
        </div>
        <div className={styles.buttons}>
          <EntryOption icon={<HiOutlineRefresh />} />
          <EntryOption icon={<BsChatLeftText />} />
          <EntryOption icon={<BsPaperclip />} />
          <EntryOption icon={<BiLike />} />
        </div>
        <div className={styles.submit}>
          <SubmitButton text="Enviar" customClass="green" />
        </div>
      </form>
    </div>
  );
}

export default AddTransf;
