import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import laptopImg from '../../assets/about.png'
import { FaUserTie } from 'react-icons/fa';

const experiences = [
  {
    title: "FRONTEND DEVELOPER",
    company: "Biztechnosys Pvt. Ltd.",
    date: "Oct 2023 - July 2024",
  },
  {
    title: "FULLSTACK DEVELOPER",
    company: "E2LOGY SOFTWARE SOLUTIONS",
    date: "July 2024 - Jan 2025",
  },
  {
    title: "MERN STACK DEVELOPER",
    company: "BRAINERHUB SOLUTIONS",
    date: "Jan 2025 - Present",
  },
  {
    title: "SELF EMPLOYED",
    company: "Code and build something in everyday.",
    date: "Jan 2020 - Present",
  },
];

function Experience() {
  return (
    <Container className="py-5" style={{ background: '', minHeight: '100vh' }}>
      <h2 className="text-center mb-5" style={{ color: '#b388ff' }}>Experiences</h2>
      <Row className="align-items-center">
        {/* Left Side Image */}
        <Col md={6} className="d-flex justify-content-center mb-4 mb-md-0">
          <Image src={laptopImg} alt="Laptop illustration" fluid style={{ maxWidth: '90%' }} />
        </Col>

        {/* Right Side Cards */}
        <Col md={6}>
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-blue text-light mb-4 shadow-sm"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '1rem',
                padding: '1rem',
              }}
            >
              <Row className="align-items-center">
                {/* Icon Left Side */}
                <Col xs="auto">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      background: '#4b0082',
                      borderRadius: '50%',
                      width: '50px',
                      height: '50px',
                    }}
                  >
                    <FaUserTie size={24} color="white" />
                  </div>
                </Col>

                {/* Text Right Side */}
                <Col>
                  <small className="text-success">({exp.date})</small>
                  <h5 className="mb-1 mt-1" style={{ color: '#fff' }}>{exp.title}</h5>
                  <p className="text-muted mb-0">{exp.company}</p>
                </Col>
              </Row>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Experience;
