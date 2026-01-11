import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

const Nabvar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Pizzería Mamma Mia!</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/"><Button className="nav_button" variant="outline-light" style={{marginRight: '5px'}}>🍕 Home</Button></Link>
            <Link to="/profile"><Button className="nav_button" variant="outline-light" style={{marginRight: '5px'}}>🔓 Profile</Button></Link>
            <Link to="/"><Button className="nav_button" variant="outline-light" style={{marginRight: '5px'}}>🔒 Logout</Button></Link>
            <Link to="/login"><Button className="nav_button" variant="outline-light" style={{marginRight: '5px'}}>🔐 Login</Button></Link>
            <Link to="/register"><Button className="nav_button" variant="outline-light">🔐 Register</Button></Link>
          </Nav>
          <Link to="/cart"><Button className="nav_button" variant="outline-info">🛒 Total: $xxx</Button></Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Nabvar