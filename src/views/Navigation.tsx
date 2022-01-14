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
              style={{ marginRight: "10px", borderRadius: "5px" }}
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
          <div style={{ textAlign: "center" }}>
            <a
              href="https://band.us/@feel2018"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("../img/BAND_Icon.png")}
                alt="BAND"
                style={{ width: "36px", height: "36px", margin: "0 20px" }}
              />
            </a>
            <a
              href="https://blog.naver.com/daeng13"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("../img/blog_icon.png")}
                alt="Blog"
                style={{ width: "36px", height: "36px", margin: "0 20px" }}
              />
            </a>
            <a
              href="https://www.instagram.com/feel_pot/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("../img/Instagram_icon.png")}
                alt="Instagram"
                style={{ width: "36px", height: "36px", margin: "0 20px" }}
              />
            </a>
          </div>
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
