import { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import Axios from "axios";

import styles from "./Login.module.css";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";

function Register({ show, id, setShow, logged, setLogged, hook }) {
  const [user, setUser] = useState({});
  const [warningNome, setWarningNome] = useState(false);
  const [warningSobrenome, setWarningSobrenome] = useState(false);
  const [warningEmail, setWarningEmail] = useState(false);
  const [warningSenha, setWarningSenha] = useState(false);
  const [warningContrassenha, setWarningContrassenha] = useState(false);

  const regexNomes = /[a-zà-ú]/gi;
  const regexEmail = /\S+@\S+\.\S+/;
  const regexSenha =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

  function validaNome() {
    if (user.nome && regexNomes.test(user.nome) && user.nome.length >= 3) {
      setWarningNome(false);
      return true;
    }
    setWarningNome("Nome Inválido");
    return false;
  }

  function validaSobrenome() {
    if (
      user.sobrenome &&
      regexNomes.test(user.sobrenome) &&
      user.nome.length >= 3
    ) {
      setWarningSobrenome(false);
      return true;
    }
    setWarningSobrenome("Sobrenome Inválido");
    return false;
  }

  function validaEmail() {
    if (user.email && regexEmail.test(user.email)) {
      setWarningEmail(false);
      return true;
    }
    setWarningEmail("Email Inválido");
    return false;
  }

  function validaSenha() {
    if (user.senha && regexSenha.test(user.senha)) {
      setWarningSenha(false);
      return true;
    }
    setWarningSenha("Senha Inválida");
    return false;
  }

  function validaContrassenha() {
    if (user.confirmaSenha && user.senha === user.confirmaSenha) {
      setWarningContrassenha(false);
      return true;
    }
    setWarningContrassenha("Contrassenha Inválida");
    return false;
  }

  function formValido() {
    if (
      validaNome() &&
      validaSobrenome() &&
      validaEmail() &&
      validaSenha() &&
      validaContrassenha()
    ) {
      return true;
    } else {
      return false;
    }
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(`${e.target.name}: ${e.target.value}`);
  }

  function submit(e) {
    e.preventDefault();
    if (formValido()) {
      console.log("Estou sendo executado");
      Axios.post("http://localhost:3001/register", {
        first_name: user.nome,
        scnd_name: user.sobrenome,
        email: user.email,
        password: user.senha,
      })
        .then((resp) => console.log(resp))
        .catch((e) => console.log("Erro:", e));
      hook.setTypeMsg("success");
      hook.setMsg("USUÁRIO CADASTRADO COM SUCESSO!!!");
      setUser({});
      document.getElementById("myForm").reset();
      setShow();
      setLogged(true);
    }
  }

  return (
    <>
      <div
        className={`${styles.container} ${
          show ? styles.active : styles.inactive
        }`}
        id={id}
      >
        <form className={styles.form} id="myForm">
          <h3 id={styles.title}>Registar</h3>
          <div className={styles.double}>
            <Input
              label="Nome"
              type="text"
              name="nome"
              placeholder="Primeiro Nome"
              handleOnChange={handleChange}
              warning={warningNome}
            />
            <Input
              label="Sobrenome"
              type="text"
              name="sobrenome"
              placeholder="Segundo Nome"
              handleOnChange={handleChange}
              warning={warningSobrenome}
            />
          </div>
          <Input
            label="E-mail"
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            handleOnChange={handleChange}
            warning={warningEmail}
          />
          <div className={styles.double}>
            <Input
              label="Senha"
              type="password"
              name="senha"
              placeholder="Digite sua senha"
              handleOnChange={handleChange}
              warning={warningSenha}
            />
            <Input
              label="Confirmação de senha"
              type="password"
              name="confirmaSenha"
              placeholder="Confirme sua senha"
              handleOnChange={handleChange}
              warning={warningContrassenha}
            />
          </div>
          <div className={styles.submitBtn}>
            <SubmitButton text="Enviar" customClass="on" onClick={submit} />
          </div>
          {/* <div className={styles.formTerms}>
            <input
              type="checkbox"
              className={styles.checkbox}
              onChange={() => setChecked(!checked)}
            />
            <span>
              Declaro que li e concordo integralmente com os{" "}
              <a href="">termos e condições de uso</a>
            </span>
          </div> */}
        </form>
      </div>
    </>
  );
}

export default Register;
