/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container className="mt-3">
        <div className='body-height'> 
        {children}
        </div>
       
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
