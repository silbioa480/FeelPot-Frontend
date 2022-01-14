import { Carousel } from "react-bootstrap";
import styled from "styled-components";

const Img = styled.img`
  height: 60vh;
`;

function Header() {
  return (
    <Carousel fade style={{ minWidth: "424px" }}>
      <Carousel.Item>
        <Img
          className="d-block w-100"
          src={require("../img/head-1.jpg")}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <Img
          className="d-block w-100"
          src={require("../img/head-2.png")}
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <Img
          className="d-block w-100"
          src={require("../img/head-3.jpg")}
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <Img
          className="d-block w-100"
          src={require("../img/head-4.png")}
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default Header;
