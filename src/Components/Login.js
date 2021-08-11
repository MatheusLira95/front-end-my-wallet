import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const history = useHistory();

  if (localStorage.getItem("userSaved")) {
    history.push("/home");
  }

  function Connect(e) {
    e.preventDefault();
    const body = { email, password };
    setDisabled(true);
    const request = axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/sign-in`,
      body
    );
    request.then((res) => {
      alert("Login feito com sucesso! Bem-vindo!");
      setUser(res.data);
      const userStorage = JSON.stringify(res.data);
      localStorage.setItem("userSaved", userStorage);
      setTimeout(() => {
        history.push("/home");
      }, 2000);
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
        <form onSubmit={(e) => Connect(e)}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="E-mail"
            disabled={disabled}
          ></input>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
            disabled={disabled}
          ></input>
          <button onClick={Connect} disabled={disabled}>
            {disabled ? (
              <Loader type="ThreeDots" color="#FFF" height={40} width={45} />
            ) : (
              "Entrar"
            )}
          </button>
        </form>
        <Link to="register">
          <p className="register">Primeira vez? Cadastre-se!</p>
        </Link>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  a {
    text-decoration: none;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 500px;
    @media (max-width: 530px) {
      width: 100%;
    }
  }
  input {
    height: 58px;
    margin-bottom: 13px;
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 15px;
    font-size: 20px;
    ::placeholder {
      font-size: 20px;
    }
  }
  button {
    height: 46px;
    background-color: #a328d6;
    border: none;
    color: #fff;
    font-size: 26px;
    font-weight: bold;
    border-radius: 5px;
  }
  .title {
    color: #fff;
    font-family: "Saira Stencil One";
    font-size: 32px;
    margin-bottom: 40px;
  }
  .register {
    color: #fff;
    margin-top: 30px;
    font-weight: bold;
  }
`;

export { Container };
