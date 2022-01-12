import { Figure, Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";

interface IProduct {
  product: {
    name: string;
    index: number;
    image: string;
    description: string;
  };
}

function Product() {
  const { state } = useLocation<IProduct>();
  const product = state?.product;

  return (
    <>
      <div style={{ height: "50px" }}></div>
      {product ? (
        <Figure style={{ textAlign: "center" }}>
          <Figure.Image
            width={"95%"}
            height={"auto"}
            alt={product.image}
            src={require(`../img/${product.image}`)}
          />
          <Figure.Caption
            style={{
              textAlign: "center",
              fontSize: "48px",
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
              fontSize: "24px",
              lineHeight: "200%",
              color: "#148BA0",
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
