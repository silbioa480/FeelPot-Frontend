import { Figure, Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import IProduct from "../model/IProduct";

interface IState {
  product: IProduct;
}

function Product() {
  const { state } = useLocation<IState>();
  const product = state?.product;

  return (
    <>
      {product ? (
        <Figure style={{ textAlign: "center" }}>
          <Figure.Image
            width={"95%"}
            height={"auto"}
            alt={product.image}
            src={require(`../img/${product.image}`)}
            loading="lazy"
          />
          <Figure.Caption
            style={{
              textAlign: "center",
              fontFamily: "NanumGarMaesGeur",
              fontSize: "4em",
              fontWeight: "bold",
              margin: "20px 0",
              color: "#D67158",
            }}
          >
            {product.name}
          </Figure.Caption>
          <Figure.Caption
            style={{
              margin: "0 auto",
              width: "80%",
              fontFamily: "NanumGimYuICe",
              fontSize: "2em",
              lineHeight: "200%",
              color: "#191b1b",
              textAlign: "end",
            }}
          >
            {product.price} 원
          </Figure.Caption>
          <Figure.Caption
            style={{
              margin: "0 auto",
              width: "80%",
              fontFamily: "NanumGaRamYeonGgoc",
              fontSize: "1.5em",
              lineHeight: "200%",
              color: "#1a7c8d",
            }}
          >
            {product.description}
          </Figure.Caption>
        </Figure>
      ) : (
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
      )}
    </>
  );
}

export default Product;
