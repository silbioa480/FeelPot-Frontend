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
      <Figure>
        <Figure.Image
          width={"auto"}
          height={"auto"}
          alt={product.image}
          src={require(`../img/${product.image}`)}
        />
        <Figure.Caption
          style={{
            textAlign: "center",
            fontSize: "48px",
            fontStyle: "bold",
            margin: "20px 0",
          }}
        >
          {product.name}
        </Figure.Caption>
        <Figure.Caption style={{ fontSize: "24px", lineHeight: "200%" }}>
          {product.description}
        </Figure.Caption>
      </Figure>
    </>
  );
}

export default Product;
