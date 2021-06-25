import { Container } from "./Login";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [disabled, setDisabled] = useState(false);

  const history = useHistory();
  function Subscribe(e) {
    e.preventDefault();
    const body = { email, name, password, confirmPass };
    console.log(body);
    setDisabled(true);
    const request = axios.post("http://localhost:4000/sign-up", body);
    request.then(() => {
      alert("Login feito com sucesso! Bem-vindo!");
      history.push("/");
    });
    request.catch((err) => {
      alert("Dados inseridos incorretamente, tente novamente.");
      setDisabled(false);
    });
  }
  return (
    <>
      <Container>
        <p className="title">My Wallet</p>
        <form onSubmit={(e) => Subscribe(e)}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Nome"
            disabled={disabled}
          ></input>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="E-mail"
            disabled={disabled}
          ></input>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Senha"
            disabled={disabled}
          ></input>
          <input
            onChange={(e) => setConfirmPass(e.target.value)}
            type="text"
            placeholder="Confirme a senha"
            disabled={disabled}
          ></input>
          <button onClick={Subscribe} disabled={disabled}>
            {disabled ? (
              <Loader type="ThreeDots" color="#FFF" height={40} width={45} />
            ) : (
              "Cadastrar"
            )}
          </button>
        </form>
        <Link to="/">
          <p className="register">Já tem uma conta? Entre agora!</p>
        </Link>
      </Container>
    </>
  );
}
