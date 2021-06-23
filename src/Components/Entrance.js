import styled from "styled-components";
import { ArrowBackOutline } from "react-ionicons";
import { useHistory } from "react-router";

export default function Entrance() {
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
          Nova entrada
        </Title>
        <Form>
          <input placeholder="Valor"></input>
          <input placeholder="Descrição"></input>
          <button>Salvar entrada</button>
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
