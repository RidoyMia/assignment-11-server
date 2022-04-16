import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Customlink from '../../Customlink';
import './Header.css';

const Header = () => {
    return (
        <div>
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                          <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ms-auto">
                                <Customlink className='link' to='/'>Home</Customlink>
                                <Customlink className='link' to='/login'>Login</Customlink>
                                </Nav>
                            </Navbar.Collapse>
                    </Container>
                </Navbar>
        </div>
    );
};

export default Header;