import styles from "./ApresentacaoUsuario.module.css";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

function ApresentacaoUsuario({ userName, userSaldo }) {
  const saudacao = ["Bom dia,", "Boa tarde,", "Boa noite,"];

  return (
    <div className={styles.container}>
      <div className={styles.saudacao}>
        <span>{saudacao[2]}</span>
        <h3>{userName}</h3>
      </div>
      <div className={styles.saldoBlock}>
        <div className={styles.saldoGeral}>
          <span>saldo geral</span>
          <div className={styles.valor}>
            <span className={styles.cifrao}>R$</span>
            <h2>{userSaldo}</h2>
          </div>
        </div>
        <div className={styles.toggleSaldo}>
          <BsEyeFill />
          {/* <BsEyeSlashFill /> */}
        </div>
      </div>
    </div>
  );
}

export default ApresentacaoUsuario;
