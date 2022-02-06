import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

function TennisNavbar() {
  return (
    <>
        <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <Nav.Link href='# '>Home</Nav.Link>
                        <Nav.Link href='# '>Games</Nav.Link>
                        <Nav.Link href='# '>Users</Nav.Link>
                        <Nav.Link href='# '>About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  );
}

export default TennisNavbar;
