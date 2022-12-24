/** @format */

import React from 'react';


import {Offcanvas,NavDropdown,Navbar, Nav,Container}  from 'react-bootstrap';
import './nav-tab.css';
import logo from '../../Assets/JPU_Logo.png';
import { Link } from 'react-router-dom';

const nav_tab = () => {
  return (
    <>
      <section>
        {['md'].map((expand) => (
          <Navbar key={expand} bg='transparent' expand={expand}>
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
                <Offcanvas.Body>
                  <Nav className='justify-content-end flex-grow-1 pe-2 fs-5'>
                    {/* <Nav.Link>Home</Nav.Link> */}
                    <Link to='/' className='nav-link'>
                      Home
                    </Link>
                    <Link to='/About' className='nav-link'>
                      About
                    </Link>
                    <NavDropdown
                      title='Projects'
                      id={`offcanvasNavbarDropdown-expand-${expand}`}>
                      <NavDropdown.Item>
                        <Link
                          to='/Project_completed'
                          className='dropdown-toggle nav-link'>
                          Completed projects
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link
                          to='/Project_OnGoing'
                          className='dropdown-toggle nav-link'>
                          Ongoing Projects
                        </Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Link to='/Contact_Us' className='nav-link'>
                      Contact Us
                    </Link>
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
