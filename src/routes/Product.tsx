import { Figure } from "react-bootstrap";
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
  const { product } = state;

  return (
    <>
      <div style={{ height: "50px" }}></div>
      <Figure style={{ textAlign: "center" }}>
        <Figure.Image
          width={"90%"}
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
          }}
        >
          {product.description}
        </Figure.Caption>
      </Figure>
    </>
  );
}

export default Product;
