import styles from "./Home.module.css";

import { SlWallet } from "react-icons/sl";
import { FiShoppingBag } from "react-icons/fi";

import VisaoGeral from "../boxes/landingPageBlocks/visaoGeral/VisaoGeral";
import ExibitionCard from "../layout/ExibitionCard";
import CardBanner from "../elements/banners/CardBanner";
import Banner from "../elements/banners/Banner";

function Home({
  hook
}) {
  return (
    <div className={styles.container}>
      <VisaoGeral
        receita="0,00"
        despesa="0,00"
        hook={hook}
      />
      <div className={styles.dividedBody}>
        <div className={styles.leftSide}>
          <ExibitionCard title="Minhas contas">
            <Banner
              icon={<SlWallet />}
              title="Conta Inicial"
              subTitle="Outros"
              value="0,00"
            />
          </ExibitionCard>
          <ExibitionCard title="Cartões de crédito">
            <CardBanner />
            <CardBanner />
          </ExibitionCard>
        </div>
        <div className={styles.rightSide}>
          <ExibitionCard title="Contas a pagar">
            <Banner
              icon={<FiShoppingBag />}
              title="Nome da Despesa"
              subTitle="17/11/2022"
              value="123,12"
              valueType="expense"
            />
            <Banner
              icon={<FiShoppingBag />}
              title="Nome da Despesa"
              subTitle="17/11/2022"
              value="123,12"
              valueType="expense"
            />
            <Banner
              icon={<FiShoppingBag />}
              title="Nome da Despesa"
              subTitle="17/11/2022"
              value="123,12"
              valueType="expense"
            />
          </ExibitionCard>
          <ExibitionCard title="Contas a receber">
            <Banner
              icon={<FiShoppingBag />}
              title="Nome da Receita"
              subTitle="17/11/2022"
              value="123,12"
              valueType="revenue"
            />
            <Banner
              icon={<FiShoppingBag />}
              title="Nome da Receita"
              subTitle="17/11/2022"
              value="123,12"
              valueType="revenue"
            />
          </ExibitionCard>
        </div>
      </div>
    </div>
  );
}

export default Home;
