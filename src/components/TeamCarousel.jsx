import React from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function TeamCarousel({ language = 'en' }) {
  const content = {
    en: {
      teamTitle: 'Meet Our Team',
    },
    ar: {
      teamTitle: 'تعرف على فريقنا',
    },
  };

  const currentContent = content[language] || content.en;

  const teamMembers = [
    {
      name: 'John Doe',
      position: 'CEO',
      bio: 'John is a visionary leader with over 20 years of experience.',
      image: '/src/assets/images/team/closeup-confident-middle-aged-business-leader.jpg',
    },
    {
      name: 'Jane Smith',
      position: 'CTO',
      bio: 'Jane is a tech enthusiast and innovator leading our tech team.',
      image: '/src/assets/images/team/portrait-handsome-smiling-businessman-office.jpg',
    },
  ];

  const groupedTeamMembers = [];
  for (let i = 0; i < teamMembers.length; i += 3) {
    groupedTeamMembers.push(teamMembers.slice(i, i + 3));
  }

  return (
    <section style={{ padding: '4rem 2rem', backgroundColor: '#f8f9fa' }} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Container>
        <Row>
          <Col className="text-center">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3.4375rem' }}>{currentContent.teamTitle}</h2>
            <Carousel indicators={false} interval={3000}>
              {groupedTeamMembers.map((group, index) => (
                <Carousel.Item key={index}>
                  <Row className="justify-content-center">
                    {group.map((member, idx) => (
                      <Col key={idx} md={4} className="mb-4">
                        <Card style={{ border: 'none', borderRadius: '20px' }} className="text-center">
                          <Card.Img
                            variant="top"
                            src={member.image}
                            alt={`${member.name}`}
                            style={{ width: '100%', height: '250px', objectFit: 'cover', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
                          />
                          <Card.Body style={{ backgroundColor: '#6c63ff', color: '#fff', padding: '1rem', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
                            <Card.Title>{member.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-light">{member.position}</Card.Subtitle>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                              <FaInstagram size={24} />
                              <FaTwitter size={24} />
                              <FaLinkedin size={24} />
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
