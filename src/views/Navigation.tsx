import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">필 수제화분</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="전체 화분" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/">인기 화분</NavDropdown.Item>
              <NavDropdown.Item href="/">추천 화분</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/logIn">로그인</Nav.Link>
            <Nav.Link eventKey={2} href="/signUp">
              회원가입
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
