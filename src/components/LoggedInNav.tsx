import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsCart, BsPerson } from "react-icons/bs";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isLoginAtom, loggedMemberAtom } from "../atoms";
import Swal from "sweetalert2";

const LinkBox = styled.div`
  align-self: center;
  text-align: center;
  margin: 0 10px;
`;

function LoggedInNav() {
  const setIsLogin = useSetRecoilState(isLoginAtom);
  const [loggedMember, setLoggedMember] = useRecoilState(loggedMemberAtom);

  return (
    <>
      <LinkBox>
        <Link
          onClick={async () => {
            setIsLogin(false);
            setLoggedMember({
              id: "",
              password: "",
              name: "",
              birth: new Date(),
              isMale: false,
              address: "",
              email: "",
              phoneNumber: "",
              isAdmin: false,
              cart: "",
            });

            await Swal.fire({
              icon: "success",
              title: "로그아웃 되었습니다.",
            });
          }}
          to="/1"
        >
          로그아웃
        </Link>
      </LinkBox>

      <LinkBox>
        <Link to="/member/cart">
          <BsCart style={{ width: "30px", height: "30px", margin: "0 10px" }} />
        </Link>
      </LinkBox>

      <LinkBox>
        <Link to={"/member/" + loggedMember.id}>
          <BsPerson
            style={{ width: "36px", height: "36px", margin: "0 10px" }}
          />
        </Link>
      </LinkBox>
    </>
  );
}

export default LoggedInNav;
