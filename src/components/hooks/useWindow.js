import { useState } from "react";

export default function useWindow() {
  const [visible, setVisible] = useState(false);
  const [visibleBalance, setVisibleBalance] = useState(true)
  const [typeMsg, setTypeMsg] = useState()
  const [msg, setMsg] = useState()

  return {
    loginVisivel: visible == "login",
    registerVisivel: visible == "register",
    revenueVisivel: visible == "revenue",
    expenseVisivel: visible == "expense",
    transfVisivel: visible == "transf",
    blurVisivel: visible != false,
    typeMsg,
    msg,
    visibleBalance,
    setMsg,
    setTypeMsg,

    displayLogin: () => {
      visible != "login" ? setVisible("login") : setVisible(false);
    },
    displayRegister: () => {
      visible != "register" ? setVisible("register") : setVisible(false);
    },
    displayRevenue: () => {
      visible != "revenue" ? setVisible("revenue") : setVisible(false);
    },
    displayExpense: () => {
      visible != "expense" ? setVisible("expense") : setVisible(false);
    },
    displayTransf: () => {
      visible != "transf" ? setVisible("transf") : setVisible(false);
    },
    displayBlur: () => {
      visible != "blur" ? setVisible("blur") : setVisible(false);
    },

    toggleBalance: () => {
      console.log("Foi")
      setVisibleBalance(!visibleBalance)
    }
  };
}
