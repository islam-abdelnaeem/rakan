import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'; // Importing social media icons

export default function AboutSection({ language = 'en' }) {
  const content = {
    en: {
      title: 'About Us',
      text: `Our mission lies in our constant and continuous endeavor to apply the latest standards
      Quality in all our services and the innovation of new solutions to ensure their effectiveness
      to our customers and make sure to keep pace with the latest regional and global developments
      In order to enhance the confidence of our customers and chart a path to real success with steady steps`,
    },
    ar: {
      title: 'حولنا',
      text: `رسالتنا تكمن في سعينا الدائم والمستمر لتطبيق أحدث معايير
      الجودة في كافة خدماتنا وإبتكار الحلول الجديدة لضمان فعاليتها
      لعملائنا ونتأكد من مدي مواكبتها لأحدث التطورات الأقليمية والعالمية
      لكي نعزز ثقة عملائنا ونرسم طريق نجاح حقيقي بخطوات ثابتة`,
    },
  };

  const currentContent = content[language] || content.en;

  return (
    <section style={{ padding: '4rem 2rem', backgroundColor: '#f8f9fa' }} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <Image
              src="/src/assets/images/ex1.jpg" // Replace with the correct image path
              alt="About Us"
              fluid
              style={{ borderRadius: '10px', objectFit: 'cover', maxHeight: '400px', width: '100%' }}
            />
          </Col>
          <Col md={6}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }} className="text-center text-md-start">
              {currentContent.title}
            </h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }} className="text-center text-md-start">
              {currentContent.text}
            </p>
            <div className="mt-3 footer-icons">
              <a href="https://www.facebook.com/ARKANELSOLID?mibextid=ZbWKwL" style={{ color: 'blue', marginRight: '1rem' }}>
                <FaFacebook size={30} />
              </a>
              <a href="https://www.instagram.com/p/CYH-0P-tWMH/?igshid=MDJmNzVkMjY%3D" style={{ color: 'blue', marginRight: '1rem' }}>
                <FaInstagram size={30} />
              </a>
              <a href="https://www.tiktok.com/@aboyousef034?_t=8r4IrDfHPjL&_r=1" style={{ color: 'blue' }}>
                <FaTiktok size={30} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
