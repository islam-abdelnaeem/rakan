import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'; // Import only the required social icons

function Footer() {
  return (
    <footer style={{ backgroundColor: '#343a40', color: '#ffffff', padding: '2rem 0', marginTop: '2rem' }}>
      <style>
        {`
          /* Reduce padding and font size on smaller screens */
          @media (max-width: 576px) {
            .footer-container {
              padding: 1rem 0;
            }
            .footer-heading {
              font-size: 1.2rem;
            }
            .footer-text {
              font-size: 0.9rem;
            }
            .footer-icons a {
              margin-right: 0.5rem;
            }
          }
        `}
      </style>
      <Container className="footer-container" style={{ width: '80%' }}>
        <Row>
          <Col md={4}>
            <h5 className="footer-heading">About Us</h5>
            <p className="footer-text">
            Our mission lies in our constant and continuous endeavor to apply the latest standards Quality in all our services and the innovation of new solutions to ensure their effectiveness to our customers and make sure to keep pace with the latest regional and global developments In order to enhance the confidence of our customers and chart a path to real success with steady steps


            </p>
          </Col>
          <Col md={4}>
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" style={{ color: '#ffffff', textDecoration: 'none' }}>Home</a></li>
              <li><a href="#services" style={{ color: '#ffffff', textDecoration: 'none' }}>Services</a></li>
              <li><a href="#products" style={{ color: '#ffffff', textDecoration: 'none' }}>Products</a></li>
              <li><a href="#contact" style={{ color: '#ffffff', textDecoration: 'none' }}>Contact Us</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="footer-heading">Contact Us</h5>
           
            <div className="mt-3 footer-icons">
              <a href="https://www.facebook.com/ARKANELSOLID?mibextid=ZbWKwL" style={{ color: '#ffffff', marginRight: '1rem' }}>
                <FaFacebook size={30} />
              </a>
              <a href="https://www.instagram.com/p/CYH-0P-tWMH/?igshid=MDJmNzVkMjY%3D" style={{ color: '#ffffff', marginRight: '1rem' }}>
                <FaInstagram size={30} />
              </a>
              <a href="https://www.tiktok.com/@aboyousef034?_t=8r4IrDfHPjL&_r=1" style={{ color: '#ffffff' }}>
                <FaTiktok size={30} />
              </a>
            </div>
          </Col>
        </Row>
        <hr style={{ borderColor: '#555' }} />
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Arkan All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
