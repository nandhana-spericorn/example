import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Outlet, useNavigate } from 'react-router-dom';
import './index.css';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dashboard from '../Dashboard/sideNav';
// import { logout } from '../../action/index';
import { useDispatch } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.commonReducer);
  console.log(role);

  return role !== 'patient' || !role ? (
    <div>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand
              className="logos"
              onClick={() => {
                navigate('/');
              }}
            >
              <a
                onClick={() => {
                  navigate('/');
                }}
              >
                MEDWIN CARES
              </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav>
                  <Nav.Link
                    className="header_text"
                    onClick={() => {
                      navigate('/');
                    }}
                  >
                    Home
                  </Nav.Link>
                </Nav>
                <Nav>
                  <Nav>
                    <Nav>
                      <Nav.Link
                        className="header_text"
                        onClick={() => {
                          navigate('/gallery');
                        }}
                      >
                        Gallery
                      </Nav.Link>
                    </Nav>

                    <Nav>
                      <Nav.Link
                        className="header_text"
                        href="http://localhost:3000/contactus"
                      >
                        contactus
                      </Nav.Link>
                    </Nav>
                    <Nav>
                      <Nav.Link
                        className="header_text"
                        onClick={() => {
                          navigate('/');
                        }}
                      >
                        login
                      </Nav.Link>
                    </Nav>
                    <Nav>
                      <Nav.Link
                        className="header_text"
                        onClick={() => {
                          navigate('/registration');
                        }}
                      >
                        Register
                      </Nav.Link>
                    </Nav>
                  </Nav>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  ) : (
    <Dashboard />
  );
};

export default Header;
