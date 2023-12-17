import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

function AppNavbar() {
  const cart = useSelector((state) => state.cart)
  return (
    <Navbar fixed='top' bg="light" expand="lg">
      <Container>
        <Link to="/Redux-Cart-App" className="navbar-brand">CartApp</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/Redux-Cart-App">Products</NavLink>
            <NavLink className="nav-link" to="/cart">Cart - {cart.length}</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;