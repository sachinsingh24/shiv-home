/** @format */

import React from 'react';

import {
  Offcanvas,
  NavDropdown,
  Navbar,
  Nav,
  Container,
} from 'react-bootstrap';
import './nav-tab.css';
import logo from '../../Assets/JPU-Logo.png';
import { Link } from 'react-router-dom';

const nav_tab = () => {
  return (
    <>
      <section>
        {['md'].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className='bg-transparent '
            collapseOnSelect>
            <Container fluid>
              <Navbar.Brand>
                <Link to='/'>
                  <img src={logo} alt='jpu logo' />
                </Link>
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
                <Offcanvas.Body aria-label='Close'>
                  <Nav className='justify-content-end flex-grow-1 pe-2 fs-5'>
                    <Nav.Link as={Link} to='/' eventKey='1'>
                      Home
                    </Nav.Link>
                    <Nav.Link as={Link} to='/About' eventKey='2'>
                      About Us
                    </Nav.Link>
                    <NavDropdown
                      title='Projects'
                      id={`offcanvasNavbarDropdown-expand-${expand}`}>
                      <NavDropdown.Item
                        as={Link}
                        to='/Constructed'
                        eventKey='3'>
                        Constructed
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to='/ShivParadise'
                        eventKey='4'>
                        Shiv Paradise
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to='/Contact' eventKey='5'>
                      Contact Us
                    </Nav.Link>
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
