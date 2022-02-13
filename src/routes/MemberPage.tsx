import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loggedMemberAtom } from "../atoms";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const MenuBox = styled.div`
  border: 1px solid;
  height: 50px;
  text-align: center;
  align-items: center;
`;

function MemberPage({ children }: Props) {
  const loggedMember = useRecoilValue(loggedMemberAtom);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "30%", flexDirection: "row" }}>
        <Link to={"/member/" + loggedMember.id}>
          <MenuBox>회원 정보</MenuBox>
        </Link>

        <Link to={"/member/update/" + loggedMember.id}>
          <MenuBox>회원 정보 변경</MenuBox>
        </Link>

        <Link to="/member/cart">
          <MenuBox>장바구니</MenuBox>
        </Link>

        <Link to={"/member/order/" + loggedMember.id}>
          <MenuBox>주문내역</MenuBox>
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default MemberPage;
