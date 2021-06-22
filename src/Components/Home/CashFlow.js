import styled from "styled-components";
import Balance from "./Balance";

export default function CashFlow({ events, setEvent }) {
  return (
    <Body hasEvents={events}>
      {events ? (
        <ul>
          {events.map((event) => {
            return (
              <Event operationType={event.type}>
                <div className="description">
                  <p className="date">{event.date}</p>
                  <p>{event.name}</p>
                </div>
                <div className="value">
                  {`R$ ${(event.value / 100).toFixed(2)}`}
                </div>
              </Event>
            );
          })}
        </ul>
      ) : (
        <p className="no-event">Não há registros de entrada ou saída</p>
      )}
      <Balance />
    </Body>
  );
}
const Body = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.hasEvents ? "flex-start" : "center")};
  height: 446px;
  border-radius: 5px;
  margin-top: 25px;
  position: relative;
  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
  }
  .no-event {
    font-size: 20px;
    width: 60%;
    text-align: center;
    color: #868686;
  }
`;
const Event = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  .description {
    display: flex;
  }
  .value {
    color: ${(props) => (props.operationType === "exit" ? "red" : "green")};
  }
  p {
    margin-right: 10px;
  }
  .date {
    color: #c6c6c6;
    font-size: 16px;
  }
`;
