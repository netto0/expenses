import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/layout/fixed/Navbar";
import Container from "./components/layout/fixed/Container";
import Footer from "./components/layout/fixed/Footer";
import Initial from "./components/pages/Initial";
import Home from "../src/components/pages/Home";
import Contas from "../src/components/pages/Contas";
import Receitas from "../src/components/pages/Receitas";
import Despesas from "../src/components/pages/Despesas";
import Login from "./components/boxes/Login";
import Register from "./components/boxes/Register";
import AddEntry from "./components/boxes/addEntry/AddEntry";
import AddTransf from "./components/boxes/addTransf/AddTransf";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showReg, setShowReg] = useState(false);
  const [showEntry, setShowEntry] = useState(false);
  const [showTransf, setShowTransf] = useState(false);
  const [showEntryExpense, setShowEntryExpense] = useState(false);
  const [showBlur, setShowBlur] = useState(false);

  function soma(valor1, valor2) {
    console.log(`O resultado da soma é ${valor1 + valor2}`)
  }

  function toggleShowEntry() {
    setShowBlur(!showBlur)
    setShowEntry(!showEntry)
  }
  
  function toggleShowTransf() {
    setShowBlur(!showBlur)
    setShowTransf(!showTransf)
  }

  function toggleShowEntryExpense() {
    setShowBlur(!showBlur)
    setShowEntryExpense(!showEntryExpense)
  }

  function toggleShowLogin() {
    if (showReg) {
      setShowReg(!showReg)
      setShowLogin(!showLogin);
      return
    } else {
      setShowLogin(!showLogin);
    }
    setShowBlur(!showBlur);
  }

  function toggleShowReg() {
    if (showLogin) {
      setShowLogin(!showLogin)
      setShowReg(!showReg);
      return
    } else {
      setShowReg(!showReg);
    }
    setShowBlur(!showBlur);
  }

  return (
    <Router>
      <Navbar
        showLogin={showLogin}
        setShowLogin={toggleShowLogin}
        showReg={showReg}
        setShowReg={toggleShowReg}
        customClass="logged"
      />
      <Login show={showLogin} />
      <Register show={showReg} />
      {/* <AddEntry expense={true} show={showEntryExpense} setShowEntry={toggleShowEntryExpense}/> */}
      <AddEntry expense={true} show={showEntryExpense} setShowEntry={toggleShowEntryExpense}/>
      <AddEntry expense={false} show={showEntry} setShowEntry={toggleShowEntry}/>
      <AddTransf show={showTransf} toggleShowTransf={toggleShowTransf}/>
      <Container blur={showBlur}>
        <Routes>
          <Route exact path="/" element={<Initial show={showLogin} />} />
          <Route path="/home" element={<Home setShowEntry={toggleShowEntry} setShowEntryExpense={toggleShowEntryExpense} toggleShowTransf={toggleShowTransf}/>} />
          <Route path="/contas" element={<Contas />} />
          <Route path="/receitas" element={<Receitas />} />
          <Route path="/despesas" element={<Despesas />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
