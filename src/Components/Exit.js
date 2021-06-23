import { Margin, Title, Form } from "./Entrance";
import { ArrowBackOutline } from "react-ionicons";
import { useHistory } from "react-router";

export default function Exit() {
  const history = useHistory();

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
        <Form>
          <input placeholder="Valor"></input>
          <input placeholder="Descrição"></input>
          <button>Salvar saída</button>
        </Form>
      </Margin>
    </>
  );
}
