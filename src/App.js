import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useWindow from "./components/hooks/useWindow";

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
  const hook = useWindow();

  return (
    <Router>
      <Navbar hook={hook} customClass="logge" />
      {hook.loginVisivel && <Login show={hook.loginVisivel} />}
      {hook.registerVisivel && <Register show={hook.registerVisivel} />}
      {hook.revenueVisivel && (
        <AddEntry
          expense={false}
          show={hook.revenueVisivel}
          setShowEntry={hook.displayRevenue}
        />
      )}
      {hook.expenseVisivel && (
        <AddEntry
          expense={true}
          show={hook.expenseVisivel}
          setShowEntry={hook.displayExpense}
        />
      )}
      {hook.transfVisivel && (
        <AddTransf
          show={hook.transfVisivel}
          toggleShowTransf={hook.displayTransf}
        />
      )}
      <Container blur={hook.blurVisivel}>
        <Routes>
          <Route exact path="/" element={<Initial />} />
          <Route path="/home" element={<Home hook={hook} />} />
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
