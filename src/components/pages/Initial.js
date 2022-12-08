import { useState } from "react";

import styles from "./Initial.module.css";
import image from "../img/grafico.png";
import Message from "../elements/banners/Message";
import { motion } from "framer-motion";

function Initial() {
  const [message, setMessage] = useState();

  return (
    <motion.div
      className={styles.majorContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      <div className={styles.initial}>
        {message && <Message type={message.type} msg={message.text} />}
        <div className={styles.content}>
          <h1>Expen$es</h1>
          <h3>Gestão de Finanças</h3>
          <img src={image} alt="grafico"></img>
        </div>
      </div>
    </motion.div>
  );
}

export default Initial;
