import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsCart, BsPerson } from "react-icons/bs";
import { useSetRecoilState } from "recoil";
import { isLoginAtom, loggedMemberAtom } from "../atoms";

const LinkBox = styled.div`
  align-self: center;
  text-align: center;
  margin: 0 10px;
`;

function LoggedInNav() {
  const setIsLogin = useSetRecoilState(isLoginAtom);
  const setLoggedMember = useSetRecoilState(loggedMemberAtom);

  return (
    <>
      <LinkBox>
        <Link
          onClick={() => {
            setIsLogin(false);
            setLoggedMember({
              id: "",
              password: "",
              name: "",
              birth: new Date(),
              isMale: false,
              email: "",
              phoneNumber: "",
              isAdmin: false,
            });
          }}
          to="/1"
        >
          로그아웃
        </Link>
      </LinkBox>

      <LinkBox>
        <Link to="/cart">
          <BsCart style={{ width: "30px", height: "30px", margin: "0 10px" }} />
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
