import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Container>
        <p className="title">My Wallet</p>
        <form>
          <input placeholder="E-mail"></input>
          <input placeholder="Senha" type="password"></input>
          <button>Entrar</button>
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
  padding: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  a {
    text-decoration: none;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 326px;
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
