import styled from "styled-components";
import { useState, useEffect } from "react";
export default function Balance({ events, setEvent }) {
  const [balance, setBalance] = useState();

  useEffect(() => {
    const firstBalance = events.map((event) => event.value);
    const total = firstBalance.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    setBalance(total);
  }, [events]);
  return (
    <Total isHigherThanZero={balance}>
      <div>
        <p>SALDO</p>
      </div>
      <div>
        <p className="total">
          {balance ? `R$ ${(balance / 100).toFixed(2)}` : ""}
        </p>
      </div>
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
  .total {
    color: ${(props) => (props.isHigherThanZero > 0 ? "green" : "red")};
  }
`;
