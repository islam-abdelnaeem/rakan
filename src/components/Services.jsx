import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Services.css';

function Services() {
  const services = [
    {
      title: 'Veneers',
      description: 'High-quality veneers with a wide range of finishes to suit any aesthetic.',
      image: '/path/to/veneer-image.jpg', // Replace with actual image path
    },
    {
      title: 'Wood',
      description: 'Durable wood materials sourced responsibly and crafted with care.',
      image: '/path/to/wood-image.jpg', // Replace with actual image path
    },
  ];

  return (
    <section style={{ padding: '4rem 2rem', backgroundColor: '#f8f9fa' }}>
      <Container>
        <h2 className="text-center mb-4">Our Services</h2>
        <Row className="justify-content-center">
          {services.map((service, index) => (
            <Col md={6} lg={4} key={index} className="mb-4 d-flex justify-content-center">
              <Card style={{ width: '80%', border: 'none', borderRadius: '20px' }} className="text-center">
                <Card.Img
                  variant="top"
                  src={service.image}
                  alt={`${service.title} Image`}
                  style={{ height: '250px', objectFit: 'cover', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
                />
                <Card.Body style={{ backgroundColor: '#6c63ff', color: '#fff', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;
