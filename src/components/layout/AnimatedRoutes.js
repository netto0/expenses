import { Routes, Route, useLocation } from "react-router-dom";

import Initial from "../pages/Initial";
import Home from "../pages/Home";
import Contas from "../pages/Contas";
import Receitas from "../pages/Receitas";
import Despesas from "../pages/Despesas";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes({hook}) {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Initial />} />
        <Route path="/home" element={<Home hook={hook} />} />
        <Route path="/contas" element={<Contas />} />
        <Route path="/receitas" element={<Receitas />} />
        <Route path="/despesas" element={<Despesas />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
