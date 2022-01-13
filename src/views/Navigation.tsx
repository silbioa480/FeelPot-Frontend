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
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      style={{
        position: "sticky",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "100",
      }}
    >
      <Container>
        <Link to="/1">
          <Navbar.Brand
            style={{
              fontFamily: "NanumGarMaesGeur",
              fontSize: "1.8em",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={require(`../favicon/android-icon-48x48.png`)}
              alt="필"
              style={{ marginRight: "10px" }}
            />
            필 수제화분
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkBox>
              <Link to="/1">Home</Link>
            </LinkBox>
            <NavDropdown
              title="       전체 화분"
              id="collasible-nav-dropdown"
              style={{ alignSelf: "center" }}
            >
              <LinkBox style={{ margin: "10px 0" }}>
                <Link to="/1">인기 화분</Link>
              </LinkBox>
              <LinkBox style={{ margin: "10px 0" }}>
                <Link to="/1">추천 화분</Link>
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
