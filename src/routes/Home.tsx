import React, { MouseEventHandler, useEffect, useState } from "react";
import {
  Card,
  Col,
  Pagination,
  PaginationProps,
  Row,
  Spinner,
} from "react-bootstrap";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchProduct } from "../api";

const CardForm = styled(Card)`
  border-radius: 5px;
  box-shadow: 0px 10px 13px -7px #00000011,
    -2px 12px 10px 3px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.05);
    transition: transform 0.4s ease-in;
  }
`;

const RowForm = styled(Row)`
  display: grid;
  margin: 0 auto;

  @media (orientation: landscape) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 5rem;
  }
  @media (orientation: portrait) {
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }
`;
interface IProduct {
  name: string;
  index: number;
  image: string;
  description: string;
}

interface IParams {
  count: number;
}

function Home() {
  const { isLoading, data } = useQuery<IProduct[]>("AllProduct", fetchProduct);

  /* const [pagi, setPagi] = useState<JSX.Element[]>([]);
  const [cnt, setCnt] = useState(1);
  const [active, setActive] = useState(1);
  let number = 1;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setActive(+event.currentTarget.outerText);
    event.currentTarget.toggleAttribute("active");
    setPagi([...pagi]);
    console.log(event.currentTarget.getAttribute("active"));
  };

  useEffect(() => {
    setCnt(Math.ceil((data?.length ?? 1) / 10));
  }, [data]);

  useEffect(() => {
    while (number <= cnt) {
      setPagi([
        ...pagi,
        <Pagination.Item
          onClick={handleClick}
          key={number}
          active={number === active}
        >
          {number}
        </Pagination.Item>,
      ]);

      number++;
    }
  }, [cnt]); */

  return (
    <>
      <div style={{ height: "50px" }}></div>
      <RowForm>
        {isLoading ? (
          <Spinner
            animation="grow"
            variant="success"
            style={{
              display: "block",
              margin: "0 auto",
              width: "auto",
              height: "auto",
            }}
          />
        ) : (
          data?.map((product) => (
            <Col key={product.index} style={{ height: "380px" }}>
              <Link
                to={{
                  pathname: `/${product.index}`,
                  state: { product },
                }}
              >
                <CardForm>
                  <Card.Img
                    variant="top"
                    src={require(`../img/${product.image}`)}
                    loading="lazy"
                    style={{
                      height: "200px",
                      maxWidth: "100%",
                      borderRadius: "5px 5px 0 0",
                    }}
                  />
                  <Card.Body>
                    <Card.Title
                      style={{ textAlign: "center", whiteSpace: "nowrap" }}
                    >
                      {product.name}
                    </Card.Title>
                    <Card.Text
                      style={{
                        height: "50px",
                        textAlign: "start",
                        overflow: "hidden",
                      }}
                    >
                      {product.description.length > 60
                        ? product.description.slice(0, 60) + "..."
                        : product.description}
                    </Card.Text>
                  </Card.Body>
                </CardForm>
              </Link>
            </Col>
          ))
        )}
      </RowForm>
      {/* <Pagination style={{ margin: "0 auto", alignSelf: "center" }}>
        {pagi}
      </Pagination> */}
    </>
  );
}

export default Home;
