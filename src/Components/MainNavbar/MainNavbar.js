import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CommonButton from '../Share/CommonButton/CommonButton';
const MainNavbar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark_blue_bg" fixed="top" variant="dark" className='border-bottom border-1 red_border_color dark_blue_bg'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="/images/Framelogo1.png" className='img-fluid' alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className='text-white px-3' href="/">HOME</Nav.Link>
                            <Nav.Link className='text-white px-3' href="#aboutGam3r">ABOUT GAM3R</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#memes">
                                <CommonButton text='Apply Now'></CommonButton>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default MainNavbar;