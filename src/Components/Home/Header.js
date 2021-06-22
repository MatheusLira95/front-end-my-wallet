import styled from "styled-components";
import { LogOutOutline } from "react-ionicons";

export default function Header() {
  return (
    <Head>
      <p>Olá, Fulano</p>
      <LogOutOutline color={"#ffffff"} height="40px" width="40px" />
    </Head>
  );
}

const Head = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 26px;
    color: #fff;
    font-weight: bold;
  }
`;
