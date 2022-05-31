import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../image/favicon.ico';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <NavLink to={'/home'}><img src={logo} alt="" /></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to={'/home'}>Home</NavLink>
                        <NavLink to={'/services'}>Services</NavLink>
                        <NavLink to={'/review'}>Order Review</NavLink>
                        <NavLink to={'/aboute'}>Aboute</NavLink>
                        <NavLink to={'/contact'}>Contact</NavLink>
                        <NavLink to={'/views'}> </NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;