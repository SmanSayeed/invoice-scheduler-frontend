/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <>
    
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container >
    <Navbar.Brand as={Link} to="/">Invoicing System</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/generate-invoice">Generate Invoice</Nav.Link>
          {/* Add more links as needed */}
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
    
  );
};

export default Header;
