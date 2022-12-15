// import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Axios } from "axios";
import { useState } from "react";

import styles from "./App.module.css";
import useWindow from "./components/hooks/useWindow";
import Navbar from "./components/layout/fixed/Navbar";
import Footer from "./components/layout/fixed/Footer";
import AnimatedRoutes from "./components/layout/AnimatedRoutes";
import Login from "./components/boxes/Login";
import Register from "./components/boxes/Register";
import AddEntry from "./components/boxes/addEntry/AddEntry";
import AddTransf from "./components/boxes/addTransf/AddTransf";
import Message from "./components/elements/banners/Message";

function App() {
  const hook = useWindow();
  const [logged, setLogged] = useState(true);

  return (
    <Router>
      <Navbar hook={hook} customClass={logged} />
      {/* <Message type="error" msg="Mensagem de teste"/> */}
      <Message type={hook.typeMsg} msg={hook.msg} />
      <div
        className={`${styles.contentBlock} ${
          hook.blurVisivel && styles.active
        }`}
      />
      <AnimatedRoutes hook={hook} className={styles.animatedRoutes} />

      <Footer />
      <div id="modals">
        <Login show={hook.loginVisivel} />
        <Register
          show={hook.registerVisivel}
          setShow={hook.displayRegister}
          logged={logged}
          setLogged={setLogged}
          hook={hook}
        />
        <AddEntry
          expense={false}
          show={hook.revenueVisivel}
          setShowEntry={hook.displayRevenue}
          id="revenue"
        />
        <AddEntry
          expense={true}
          show={hook.expenseVisivel}
          setShowEntry={hook.displayExpense}
          id="expense"
        />
        <AddTransf
          show={hook.transfVisivel}
          toggleShowTransf={hook.displayTransf}
          id="transf"
        />
      </div>
    </Router>
  );
}

export default App;
