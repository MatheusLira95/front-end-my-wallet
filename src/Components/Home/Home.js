import { useState } from "react";
import { Container } from "../Login";
import Header from "./Header";
import CashFlow from "./CashFlow";

export default function Home() {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Lanche",
      type: "exit",
      value: 1500,
      date: "DD/MM",
    },
    {
      id: 2,
      name: "Salário",
      type: "entrance",
      value: 200000,
      date: "DD/MM",
    },
  ]);
  return (
    <>
      <Container>
        <Header />
        <CashFlow events={events} setEvents={setEvents} />
      </Container>
    </>
  );
}
