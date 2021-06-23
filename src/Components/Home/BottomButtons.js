import styled from "styled-components";
import { useHistory } from "react-router";
import { AddCircleOutline } from "react-ionicons";
import { RemoveCircleOutline } from "react-ionicons";

export default function BottomButtons() {
  const history = useHistory();
  return (
    <>
      <Bottom>
        <Button onClick={() => history.push("/entrance")}>
          <AddCircleOutline color={"#ffffff"} height="25px" width="25px" />
          <p>Nova entrada</p>
        </Button>

        <Button onClick={() => history.push("/exit")}>
          <RemoveCircleOutline color={"#ffffff"} height="25px" width="25px" />
          <p>Nova saída</p>
        </Button>
      </Bottom>
    </>
  );
}
const Bottom = styled.div`
  height: 144px;
  width: 100%;
  margin-top: 13px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.div`
  background-color: #a328d6;
  height: 100%;
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;

  p {
    color: #fff;
    font-weight: bolder;
    width: 50%;
    font-size: 17px;
  }
`;
