import React, { MouseEventHandler, useEffect, useState } from "react";
import { Card, Col, Pagination, PaginationProps, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchProduct } from "../api";

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
      <Row xs={2} md={3} xxl={4} className="g-4" style={{ margin: "0 auto" }}>
        {isLoading
          ? "로딩중..."
          : data?.map((product) => (
              <Col key={product.index}>
                <Link to={`/${product.index}`}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={require(`../img/${product.image}`)}
                      style={{
                        minHeight: "410px",
                        maxHeight: "410px",
                        maxWidth: "100%",
                      }}
                    />
                    <Card.Body>
                      <Card.Title style={{ textAlign: "center" }}>
                        {product.name}
                      </Card.Title>
                      <Card.Text style={{ textAlign: "center" }}>
                        {product.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
      </Row>
      {/* <Pagination style={{ margin: "0 auto", alignSelf: "center" }}>
        {pagi}
      </Pagination> */}
    </>
  );
}

export default Home;
