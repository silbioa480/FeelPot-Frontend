import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkBox = styled.div`
  align-self: center;
  text-align: center;
  margin: 0 10px;
`;

function NotLogInNav() {
  return (
    <>
      <LinkBox>
        <Link to="/logIn">로그인</Link>
      </LinkBox>

      <LinkBox>
        <Link to="/signUp">회원가입</Link>
      </LinkBox>
    </>
  );
}

export default NotLogInNav;
