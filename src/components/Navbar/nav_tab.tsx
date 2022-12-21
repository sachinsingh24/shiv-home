/** @format */

import React from 'react';


import {Offcanvas,NavDropdown,Navbar, Nav,Container}  from 'react-bootstrap';
import './nav-tab.css';
import logo from '../../Assets/JPU_Logo.png';

const nav_tab = () => {
  return (
    <>
      <section>
        {['md'].map((expand) => (
          <Navbar key={expand} bg='transparent' expand={expand}>
            <Container fluid>
              <Navbar.Brand href='#'>
                <img src={logo} alt='jpu logo' />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement='end'>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    shiv home
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className='justify-content-end flex-grow-1 pe-2 fs-5'>
                    <Nav.Link href='#action1'>Home</Nav.Link>
                    <Nav.Link href='#action2'>About</Nav.Link>
                    <NavDropdown
                      title='Projects'
                      id={`offcanvasNavbarDropdown-expand-${expand}`}>
                      <NavDropdown.Item href='#action3'>
                        Completed projects
                      </NavDropdown.Item>
                      <NavDropdown.Item href='#action4'>
                        Ongoing Projects
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href='#action5'>Contact Us</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </section>
    </>
  );
};

export default nav_tab;
