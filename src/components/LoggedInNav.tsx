import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { BsCart, BsPerson } from "react-icons/bs";
import { useSetRecoilState } from "recoil";
import { isLoginAtom } from "../atoms";

const LinkBox = styled.div`
  align-self: center;
  text-align: center;
  margin: 0 10px;
`;

function LoggedInNav() {
  const setIsLogin = useSetRecoilState(isLoginAtom);
  const history = useHistory();

  return (
    <>
      <LinkBox>
        <Link
          onClick={() => {
            setIsLogin(false);
          }}
          to="/1"
        >
          로그아웃
        </Link>
      </LinkBox>

      <LinkBox>
        <Link to="/cart">
          <BsCart style={{ width: "36px", height: "36px", margin: "0 10px" }} />
        </Link>
      </LinkBox>

      <LinkBox>
        <Link to="/member">
          <BsPerson
            style={{ width: "36px", height: "36px", margin: "0 10px" }}
          />
        </Link>
      </LinkBox>
    </>
  );
}

export default LoggedInNav;
