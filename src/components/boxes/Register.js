import styles from "./Login.module.css";
import { useState } from "react";

import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";

function Register({ show, setMessage }) {
  const [user, setUser] = useState({});
  const [clicavel, setClicavel] = useState(false);

  const validaForm =
    validaNome(user) &&
    validaSobrenome(user) &&
    validaEmail(user) &&
    validaSenha(user) &&
    validaContraSenha(user);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function validaNome(user) {
    const regex = /[a-zà-ú]/gi;
    const validaNome = regex.test(user.nome);
    if (!validaNome || !user.nome) {
      return false;
    }
    return true;
  }

  function validaSobrenome(user) {
    const regex = /[a-zà-ú]/gi;
    const validaSobrenome = regex.test(user.sobrenome);
    if (!validaSobrenome || !user.sobrenome) {
      return false;
    }
    return true;
  }

  function validaEmail(user) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(user.email);
  }

  function validaSenha(user) {
    const regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
    return regex.test(user.senha);
  }

  function validaContraSenha(user) {
    const vazia = !user.confirmaSenha;
    return !vazia && user.senha === user.confirmaSenha;
  }

  function toggleClicavel() {
    const marcado = document.querySelector("input[type=checkbox]").checked;
    validaForm && marcado ? setClicavel(true) : setClicavel(false);
  }

  function submit(e) {
    e.preventDefault();
    if (validaForm) {
      postDb(user);
      setClicavel(false);
    }
  }

  function postDb(user) {
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(
        setMessage({ type: "success", text: "Usuário cadastrado com sucesso" })
      )
      .catch((err) => setMessage({ type: "error", text: `${err}` }));
  }

  return (
    <>
      <div
        className={`${styles.container} ${
          show ? styles.active : styles.inactive
        }`}
      >
        <form className={styles.form} onSubmit={submit}>
          <h3 id={styles.title}>Registar</h3>
          <div className={styles.double}>
            <Input
              label="Nome"
              type="text"
              name="nome"
              placeholder="Primeiro Nome"
              handleOnChange={handleChange}
            />
            <Input
              label="Sobrenome"
              type="text"
              name="sobrenome"
              placeholder="Segundo Nome"
              handleOnChange={handleChange}
            />
          </div>
          <Input
            label="E-mail"
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            handleOnChange={handleChange}
          />
          <div className={styles.double}>
            <Input
              label="Senha"
              type="password"
              name="senha"
              placeholder="Digite sua senha"
              handleOnChange={handleChange}
            />
            <Input
              label="Confirmação de senha"
              type="password"
              name="confirmaSenha"
              placeholder="Confirme sua senha"
              handleOnChange={handleChange}
            />
          </div>
          <div className={styles.submitBtn}>
            {/* <SubmitButton text="Enviar" customClass={clicavel ? "on" : "off"} /> */}
            <SubmitButton text="Enviar" customClass="on" />
          </div>
          <div className={styles.formTerms}>
            <input
              type="checkbox"
              className={styles.checkbox}
              onChange={toggleClicavel}
            />
            <span>
              Declaro que li e concordo integralmente com os{" "}
              <a href="">termos e condições de uso</a>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
