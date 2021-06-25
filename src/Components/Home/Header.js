import styled from "styled-components";
import { LogOutOutline } from "react-ionicons";
import { Link } from "react-router-dom";
export default function Header({ user }) {
  return (
    <Head>
      <p>Olá, {user.user.name}</p>
      <Link to="/">
        <LogOutOutline
          color={"#ffffff"}
          height="40px"
          width="40px"
          onClick={() => {
            localStorage.removeItem("userSaved");
          }}
        />
      </Link>
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
