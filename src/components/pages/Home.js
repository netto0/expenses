import styles from "./Home.module.css";

import { SlWallet } from "react-icons/sl";
import { FiShoppingBag } from "react-icons/fi";
import { motion } from "framer-motion";

import VisaoGeral from "../boxes/landingPageBlocks/visaoGeral/VisaoGeral";
import ExibitionCard from "../layout/ExibitionCard";
import CardBanner from "../elements/banners/CardBanner";
import Banner from "../elements/banners/Banner";

function Home({ hook }) {
  return (
    <motion.div
      className={styles.majorContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      <div className={styles.container}>
        <VisaoGeral receita="0,00" despesa="0,00" hook={hook} />
        <div className={styles.dividedBody}>
          <div className={styles.leftSide}>
            <ExibitionCard title="Minhas contas">
              <Banner
                icon={<SlWallet />}
                title="Conta Inicial"
                subTitle="Outros"
                value="0,00"
                visibleBalance={hook.visibleBalance}
              />
            </ExibitionCard>
            <ExibitionCard title="Cartões de crédito">
              <CardBanner visibleBalance={hook.visibleBalance} />
              <CardBanner visibleBalance={hook.visibleBalance} />
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
                visibleBalance={hook.visibleBalance}
              />
              <Banner
                icon={<FiShoppingBag />}
                title="Nome da Despesa"
                subTitle="17/11/2022"
                value="123,12"
                valueType="expense"
                visibleBalance={hook.visibleBalance}
              />
              <Banner
                icon={<FiShoppingBag />}
                title="Nome da Despesa"
                subTitle="17/11/2022"
                value="123,12"
                valueType="expense"
                visibleBalance={hook.visibleBalance}
              />
            </ExibitionCard>
            <ExibitionCard title="Contas a receber">
              <Banner
                icon={<FiShoppingBag />}
                title="Nome da Receita"
                subTitle="17/11/2022"
                value="123,12"
                valueType="revenue"
                visibleBalance={hook.visibleBalance}
              />
              <Banner
                icon={<FiShoppingBag />}
                title="Nome da Receita"
                subTitle="17/11/2022"
                value="123,12"
                valueType="revenue"
                visibleBalance={hook.visibleBalance}
              />
            </ExibitionCard>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
