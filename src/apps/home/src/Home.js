import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <div className="Home">
      <Navbar bg="lg" expand="lg">
        <Navbar.Brand href="#home">STEEL MART ADMIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="">Reports</Nav.Link>
            <Nav.Link href="">Suppliers</Nav.Link>
            <NavDropdown title="Product Info" id="basic-nav-dropdown">
              <NavDropdown.Item href="">View Products</NavDropdown.Item>
              <NavDropdown.Item href="">Create Product</NavDropdown.Item>
              <NavDropdown.Item href="">Update Product</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">View Details</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Home;
