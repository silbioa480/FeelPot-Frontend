import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loggedMemberAtom } from "../atoms";
import { ListGroup } from "react-bootstrap";

type Props = {
  children: React.ReactNode;
};

function MemberPage({ children }: Props) {
  const loggedMember = useRecoilValue(loggedMemberAtom);

  return (
    <div style={{ display: "flex" }}>
      <ListGroup as="ul" style={{ width: "30%" }}>
        <ListGroup.Item as="li">
          <Link
            to={"/member/" + loggedMember.id}
            style={{
              display: "inline-block",
              width: "100%",
              padding: "10px 0",
              textAlign: "center",
            }}
          >
            회원 정보
          </Link>
        </ListGroup.Item>

        <ListGroup.Item as="li">
          <Link
            to={"/member/update/" + loggedMember.id}
            style={{
              display: "inline-block",
              width: "100%",
              padding: "10px 0",
              textAlign: "center",
            }}
          >
            회원 정보 수정
          </Link>
        </ListGroup.Item>

        <ListGroup.Item as="li">
          <Link
            to="/member/cart"
            style={{
              display: "inline-block",
              width: "100%",
              padding: "10px 0",
              textAlign: "center",
            }}
          >
            장바구니
          </Link>
        </ListGroup.Item>

        <ListGroup.Item as="li">
          <Link
            to={"/member/order/" + loggedMember.id}
            style={{
              display: "inline-block",
              width: "100%",
              padding: "10px 0",
              textAlign: "center",
            }}
          >
            주문내역
          </Link>
        </ListGroup.Item>
      </ListGroup>

      <div style={{ width: "70%", display: "flex", justifyContent: "center" }}>
        {children}
      </div>
    </div>
  );
}

export default MemberPage;
