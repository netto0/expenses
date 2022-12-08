import styles from "./ApresentacaoUsuario.module.css";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

function ApresentacaoUsuario({ userName, userSaldo, hook }) {
  // const saudacao = ["Bom dia,", "Boa tarde,", "Boa noite,"];
  const hoje = new Date();
  const hora = hoje.getHours();
  return (
    <div className={styles.container}>
      <div className={styles.saudacao}>
        {hora < 12 && <span>Bom dia,</span>}
        {hora > 12 && hora < 18 && <span>Boa tarde,</span>}
        {hora > 18 && <span>Boa noite,</span>}

        <h3>{userName}</h3>
      </div>
      <div className={styles.saldoBlock}>
        <div className={styles.saldoGeral}>
          <span>saldo geral</span>
          <div className={styles.valor}>
            <span className={styles.cifrao}>R$</span>
            {hook.visibleBalance ? <h2>{userSaldo}</h2> : <h2>--,--</h2>}
          </div>
        </div>
        <div className={styles.toggleSaldo} onClick={hook.toggleBalance}>
          {hook.visibleBalance ? <BsEyeFill /> : <BsEyeSlashFill />}
        </div>
      </div>
    </div>
  );
}

export default ApresentacaoUsuario;
