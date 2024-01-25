import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="navBar-container">
        <Navbar.Brand href="#home"> <Logo/></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features">Proteinas</Nav.Link>
          <Nav.Link href="#pricing">Creatina</Nav.Link>
          <Nav.Link href="#pricing">Pre Entreno</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
        <Nav.Link href="#pricing"> <CartWidget/></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavBar;
