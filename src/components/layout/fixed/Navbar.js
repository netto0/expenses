import { BiDollarCircle } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar({ setShowLogin, customClass, setShowReg }) {
  return (
    <div className={`${styles.navbar} ${customClass}`}>
      <div className={styles.corpo}>
        <div className={styles.areaLogo}>
          <NavLink
            end
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.link}`
            }
          >
            <BiDollarCircle className={styles.logo} />
          </NavLink>
        </div>
        {customClass == "logged" && (
          <div className={styles.linkContainer}>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : `${styles.link}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/contas"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : `${styles.link}`
              }
            >
              Contas
            </NavLink>

            <NavLink
              to="/receitas"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : `${styles.link}`
              }
            >
              Receitas
            </NavLink>

            <NavLink
              to="/despesas"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : `${styles.link}`
              }
            >
              Despesas
            </NavLink>
          </div>
        )}
      </div>
      <div className={styles.areaLogin}>
        {customClass == "logged" ? (
          <div className={styles.userField}>
            <FaUserAlt />
            <span>Usuário</span>
          </div>
        ) : (
          <>
            <button className={styles.botao} onClick={setShowReg}>
              Registrar
            </button>
            <button
              className={`${styles.botao} ${styles.entrar}`}
              onClick={setShowLogin}
            >
              Entrar
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
