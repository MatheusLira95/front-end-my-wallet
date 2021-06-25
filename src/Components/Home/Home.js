import { Container } from "../Login";
import Header from "./Header";
import CashFlow from "./CashFlow";
import BottomButtons from "./BottomButtons";

export default function Home({ user }) {
  return (
    <>
      <Container>
        <Header user={user} />
        <CashFlow user={user} />
        <BottomButtons />
      </Container>
    </>
  );
}
