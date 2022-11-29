import { useState } from "react";

import styles from "./Initial.module.css";
import image from "../img/grafico.png";
import Register from "../boxes/Register";
import Message from "../elements/banners/Message";
import Login from "../boxes/Login";

function Initial() {
  const [message, setMessage] = useState();

  return (
    <div className={styles.initial}>
      {message && <Message type={message.type} msg={message.text} />}
      <div className={styles.content}>
        <h1>Expen$es</h1>
        <h3>Gestão de Finanças</h3>
        <img src={image} alt="grafico"></img>
      </div>
    </div>
  );
}

export default Initial;
