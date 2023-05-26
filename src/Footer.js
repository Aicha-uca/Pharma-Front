import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-light">
      <Container>
        <Row>
          <Col md={4} className="my-4">
            <h5>Adresse</h5>
            <p>123 rue de la Fontaine<br />75000 Paris</p>
          </Col>
          <Col md={4} className="my-4">
            <h5>Contact</h5>
            <p>Tél. : 01 23 45 67 89<br />E-mail : contact@monapp.com</p>
          </Col>
          <Col md={4} className="my-4">
            <h5>Réseaux sociaux</h5>
            <p>
              <a href="https://www.facebook.com/"><FaFacebook /></a>{' '}
              <a href="https://twitter.com/"><FaTwitter /></a>{' '}
              <a href="https://www.instagram.com/"><FaInstagram /></a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            <p className="my-2">&copy; 2023 MonApp. Tous droits réservés.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;