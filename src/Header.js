import React from 'react';
import { Navbar, Nav, Image} from 'react-bootstrap';
import pharmacyLogo from './pharmacy-logo.png';

function Header() {
  return (
    <Navbar  expand="lg" style={{ backgroundColor:"green" }} >
      <Navbar.Brand href="/Pharmacie">
        <Image src={pharmacyLogo} alt="Logo Pharmacie" width={40} height={40} /> Pharmacie Aicha
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/Zone">Zone</Nav.Link>
          <Nav.Link href="/Garde">Garde</Nav.Link>
          <Nav.Link href="/City">City</Nav.Link>
          <Nav.Link href="/Map">Map</Nav.Link>
          <Nav.Link href="/Login">Login</Nav.Link>
          
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;