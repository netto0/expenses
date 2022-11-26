import styles from "./VisaoGeral.module.css";
import ApresentacaoUsuario from "./apresentacaoUsuario/ApresentacaoUsuario";
import { SlGraph } from "react-icons/sl";
import RoundedBox from "../../../layout/RoundedBox";
import CardButton from "../../../elements/buttons/CardButton";

import { BiTransferAlt, BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import { BsPiggyBank } from "react-icons/bs";
import { Link } from "react-router-dom";

function VisaoGeral({
  receita,
  despesa,
  setShowEntry,
  setShowEntryExpense,
  toggleShowTransf,
}) {
  return (
    <>
      <RoundedBox>
        <div className={styles.container}>
          <div className={styles.visaoGeral}>
            <ApresentacaoUsuario userName="Netto" userSaldo="0,00" />
            <div className={styles.blocks}>
              <div className={styles.infoBlock}>
                <div>
                  <p>receita mensal</p>
                  <h3 className={styles.h3receita}>R$ {receita}</h3>
                </div>
              </div>
              <div className={styles.infoBlock}>
                <div>
                  <p>despesa mensal</p>
                  <h3 className={styles.h3despesa}>R$ {despesa}</h3>
                </div>
              </div>
              <div className={styles.seeRelatorio}>
                <div className={styles.infoBlock}>
                  <SlGraph />
                  <p>ver relatórios</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.acessoRapido}>
            <h4>Acesso rápido</h4>
            <div className={styles.botoes}>
              <CardButton
                icon={<BiPlusCircle />}
                title="receita"
                color="green"
                func={setShowEntry}
                // func={setShowEntry(1,2)}
              />
              <CardButton
                icon={<BiMinusCircle />}
                title="despesa"
                color="red"
                func={setShowEntryExpense}
              />
              <CardButton
                icon={<BiTransferAlt />}
                title="transf."
                color="gray"
                func={toggleShowTransf}
              />
              <Link to="/contas">
                <CardButton
                  icon={<BsPiggyBank />}
                  title="contas"
                  color="darkGreen"
                  // func={}
                />
              </Link>
            </div>
          </div>
        </div>
      </RoundedBox>
    </>
  );
}

export default VisaoGeral;
