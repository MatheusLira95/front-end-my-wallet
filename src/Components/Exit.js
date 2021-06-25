import { Margin, Title, Form } from "./Entrance";
import { ArrowBackOutline } from "react-ionicons";
import { useHistory } from "react-router";
import { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Exit({ user }) {
  const [value, setValue] = useState();
  const [name, setName] = useState();
  const [disabled, setDisabled] = useState(false);
  const history = useHistory();

  function Exit(e) {
    e.preventDefault();
    setDisabled(true);
    const body = {
      name,
      type: "exit",
      value: value * -100,
    };
    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    };
    const request = axios.post(
      `http://localhost:4000/transactions/${user.user.id}`,
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
          Nova saída
        </Title>
        <Form onSubmit={(e) => Exit(e)}>
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
          <button onClick={Exit} disabled={disabled}>
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
