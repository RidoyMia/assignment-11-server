import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import Customlink from '../../Customlink';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const[user]=useAuthState(auth);
    const out =()=>{
        signOut(auth);
    }
        return (
        <div>
               <Navbar collapseOnSelect fixed='top' expand="lg" bg="dark" variant="dark">
                    <Container>
                          <Navbar.Brand href="#home">Stronger</Navbar.Brand>
                          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                          <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ms-auto">
                                <Customlink className='link' to='/'>Home</Customlink>
                                <Customlink className='link' to='/BLog'>Blog</Customlink>
                                <Customlink className='link' to='/aboutme'>Aout me</Customlink>
                                {
                                    user ? <Button onClick={out}>Signout</Button> : <Customlink className='link' to='/login'>Login</Customlink>
                                }
                                </Nav>
                            </Navbar.Collapse>
                    </Container>
                </Navbar>
        </div>
    );
};

export default Header;