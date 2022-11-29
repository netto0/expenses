import { useState } from "react";

export default function useWindow() {
  const [visible, setVisible] = useState(false);

  return {
    loginVisivel: visible == "login",
    registerVisivel: visible == "register",
    revenueVisivel: visible == "revenue",
    expenseVisivel: visible == "expense",
    transfVisivel: visible == "transf",
    blurVisivel: visible != false,
    displayLogin: () => {visible != "login" ? (setVisible("login")) : setVisible(false)},
    displayRegister: () => {visible != "register" ? setVisible("register") : setVisible(false)},
    displayRevenue: () => {visible != "revenue" ? setVisible("revenue") : setVisible(false)},
    displayExpense: () => {visible != "expense" ? setVisible("expense") : setVisible(false)},
    displayTransf: () => {visible != "transf" ? setVisible("transf") : setVisible(false)},
    displayBlur: () => {visible != "blur" ? setVisible("blur") : setVisible(false)},
  };
}
