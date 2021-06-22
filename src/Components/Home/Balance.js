import styled from "styled-components";
export default function Balance() {
  return (
    <Total>
      <div>
        <p>SALDO</p>
      </div>
      <div>{events.map(event => {
        let total = 0;
        total += event.value
      })}</div>
    </Total>
  );
}

const Total = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 10px;
  left: 15px;
  p {
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
  }
`;
