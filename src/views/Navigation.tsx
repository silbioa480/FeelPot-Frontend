import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkBox = styled.div`
  align-self: center;
  text-align: center;
  margin: 0 10px;
`;

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Link to="/">
          <Navbar.Brand>필 수제화분</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkBox>
              <Link to="/">Home</Link>
            </LinkBox>
            <NavDropdown title="전체 화분" id="collasible-nav-dropdown">
              <LinkBox style={{ margin: "10px 0" }}>
                <Link to="/">인기 화분</Link>
              </LinkBox>
              <LinkBox style={{ margin: "10px 0" }}>
                <Link to="/">추천 화분</Link>
              </LinkBox>
            </NavDropdown>
          </Nav>
          <Nav>
            <LinkBox>
              <Link to="/logIn">로그인</Link>
            </LinkBox>
            <LinkBox>
              <Link to="/signUp">회원가입</Link>
            </LinkBox>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
