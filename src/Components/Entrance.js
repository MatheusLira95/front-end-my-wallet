import styled from "styled-components";
import { ArrowBackOutline } from "react-ionicons";
import { useHistory } from "react-router";
import { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Entrance({ user }) {
  const [value, setValue] = useState();
  const [name, setName] = useState();
  const [disabled, setDisabled] = useState(false);

  const history = useHistory();

  function Entry(e) {
    e.preventDefault();
    setDisabled(true);
    const body = {
      name,
      type: "entrance",
      value: value * 100,
    };
    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    };
    const request = axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/transactions/${user.user.id}`,
      body,
      config
    );

    request.then((response) => {
      setDisabled(false);

      history.push("/home");
    });
  }

  return (
    <>
      <Margin>
        <Title>
          <ArrowBackOutline
            color={"#00000"}
            height="25px"
            width="25px"
            cssClasses={"arrow"}
            onClick={() => history.push("/home")}
          />
          Nova entrada
        </Title>
        <Form onSubmit={(e) => Entry(e)}>
          <input
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Valor"
            disabled={disabled}
          ></input>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Descrição"
            disabled={disabled}
          ></input>
          <button onClick={Entry} disabled={disabled}>
            {disabled ? (
              <Loader type="ThreeDots" color="#FFF" height={40} width={45} />
            ) : (
              "Enviar"
            )}
          </button>
        </Form>
      </Margin>
    </>
  );
}
const Margin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 25px;
`;
const Title = styled.div`
  width: 100%;
  color: #fff;
  font-size: 26px;
  font-weight: bold;
  display: flex;
  .arrow {
    margin-right: 10px;
  }
`;
const Form = styled.form`
  margin-top: 50px;
  input {
    width: 100%;
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
    width: 100%;
    height: 46px;
    background-color: #a328d6;
    border: none;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px;
  }
`;

export { Margin, Title, Form };
