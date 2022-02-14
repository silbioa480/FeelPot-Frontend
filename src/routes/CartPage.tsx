import { useRecoilState } from "recoil";
import { cartAtom, loggedMemberAtom } from "../atoms";
import styled from "styled-components";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { RiDeleteBin2Line } from "react-icons/ri";
import React, { MouseEventHandler, useEffect, useState } from "react";
import MemberService from "../services/MemberService";
import Swal from "sweetalert2";

const CardForm = styled(Card)`
  border-radius: 5px;
  box-shadow: 0 10px 13px -7px rgba(49, 47, 47, 0.04),
    -2px 12px 10px 3px rgba(49, 47, 47, 0.04);

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in;
  }
`;

const CartDelete = styled(RiDeleteBin2Line)`
  display: block;
  width: 24px;
  height: 24px;
  align-self: center;

  &:hover {
    color: red;
  }
`;

const RowForm = styled(Row)`
  display: grid;
  margin: 0 auto;
  grid-row-gap: 80px;

  @media (orientation: landscape) {
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }
  @media (orientation: portrait) {
    grid-template-columns: 1fr;
    column-gap: 2rem;
  }
`;

function CartPage() {
  const [sum, setSum] = useState<number>(0);
  const [loggedMember, setLoggedMember] = useRecoilState(loggedMemberAtom);
  const [cart, setCart] = useRecoilState(cartAtom);

  const history = useHistory();

  const handleCartDelete: MouseEventHandler<SVGElement> = async (event) => {
    let productId = event.currentTarget.getAttribute("name");

    setLoggedMember({
      id: loggedMember.id,
      password: loggedMember.password,
      name: loggedMember.name,
      birth: loggedMember.birth,
      isMale: loggedMember.isMale,
      address: loggedMember.address,
      email: loggedMember.email,
      phoneNumber: loggedMember.phoneNumber,
      isAdmin: loggedMember.isAdmin,
      cart: loggedMember.cart
        .split("#")
        .filter((item) => (item !== productId ? item : ""))
        .join("#"),
    });

    await MemberService.updateMember(loggedMember, loggedMember.id);

    setCart(
      cart.filter((product) => {
        if (product.id.toString() !== productId) return product;
      })
    );

    await Swal.fire({
      icon: "success",
      title: "장바구니에서 삭제되었습니다.",
    });

    history.push("/member/cart");
  };

  useEffect(() => {
    MemberService.updateMember(loggedMember, loggedMember.id);

    for (let product of cart) {
      setSum((prev) => prev + product.price);
    }
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <RowForm>
        {cart.length === 0 ? (
          <h1>장바구니에 상품이 없습니다.</h1>
        ) : (
          cart?.map((product) => (
            <Col key={product.id} style={{ height: "380px" }}>
              <Link
                to={{
                  pathname: `/product/${product.id}`,
                  state: { product },
                }}
              >
                <CardForm>
                  <Card.Img
                    variant="top"
                    src={require(`../img/${product.image}`)}
                    loading="lazy"
                    style={{
                      height: "250px",
                      maxWidth: "100%",
                      borderRadius: "5px 5px 0 0",
                    }}
                  />
                  <Card.Body>
                    <Card.Title
                      style={{
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        fontFamily: "NanumGarMaesGeur",
                        fontSize: "2em",
                      }}
                    >
                      {product.name}
                    </Card.Title>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <CartDelete
                        name={product.id.toString()}
                        onClick={handleCartDelete}
                      />
                      <div
                        style={{
                          textAlign: "end",
                          margin: "10px 0",
                          fontFamily: "NanumGimYuICe",
                          fontSize: "1.5em",
                        }}
                      >
                        {product.price} 원
                      </div>
                    </div>
                    <Card.Text
                      style={{
                        height: "40px",
                        textAlign: "start",
                        overflow: "hidden",
                        fontFamily: "NanumGaRamYeonGgoc",
                        fontSize: "1.3em",
                      }}
                    >
                      {product.description.length > 50
                        ? product.description.slice(0, 50) + "..."
                        : product.description}
                    </Card.Text>
                  </Card.Body>
                </CardForm>
              </Link>
            </Col>
          ))
        )}
      </RowForm>
      <div
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <span style={{ fontSize: "20px" }}>합계: {sum}원</span>
        <Button>구매하기</Button>
      </div>
    </div>
  );
}

export default CartPage;
