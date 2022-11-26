import styles from "./Login.module.css";
import { useState } from "react";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";

function Login({ show }) {
  function submit(e) {
    e.preventDefault();
    console.log("Login");
  }

  return (
    <>
      <div
        className={`${styles.container} ${
          show ? styles.active : styles.inactive
        }`}
      >
        <form onSubmit={submit} className={styles.form}>
          <h3 id={styles.title}>Login</h3>
          <Input
            type="email"
            label="E-mail"
            name="email"
            placeholder="Digite seu e-mail"
          />
          <Input
            type="password"
            label="Senha"
            name="senha"
            placeholder="Digite sua senha"
          />
          <div className={styles.remember}>
            <input type="checkbox" />
            <span>Lembrar-me</span>
          </div>
          <SubmitButton text="Entrar" customClass="on" />
          <span className={styles.register}>Efetuar Cadastro</span>
        </form>
      </div>
    </>
  );
}

export default Login;
