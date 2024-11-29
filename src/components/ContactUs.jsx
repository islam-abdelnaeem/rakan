import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <style>
        {`
          @media (max-width: 576px) {
            .contact-container {
              padding: 1rem;
            }
          }
        `}
      </style>
      <Container style={{ maxWidth: '600px', marginTop: '2rem' }} className="contact-container">
        <h2 className="text-center mb-4">Contact Us</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </Form.Group>

          <Form.Group controlId="formMessage" className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows={4}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default ContactUs;
