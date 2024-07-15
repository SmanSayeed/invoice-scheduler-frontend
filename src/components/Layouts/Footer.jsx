/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="mt-5">
      <Container className="text-center">
        <p>&copy; {new Date().getFullYear()} Your Company</p>
      </Container>
    </footer>
  );
};

export default Footer;
