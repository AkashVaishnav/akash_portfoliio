import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import laptopImg from '../../assets/about.png'
import { FaUserTie } from 'react-icons/fa';

const experiences = [
  {
    title: "MERN STACK DEVELOPER",
    company: "BRAINERHUB SOLUTIONS",
    date: "Jan 2025 - Present",
  },
  {
    title: "FULLSTACK DEVELOPER",
    company: "E2LOGY SOFTWARE SOLUTIONS",
    date: "July 2024 - Jan 2025",
  },
  {
    title: "FRONTEND DEVELOPER",
    company: "BIZTECHNOSYS PVT LTD",
    date: "Oct 2023 - July 2024",
  },
  {
    title: "SELF EMPLOYED",
    company: "CODE AND BUILD SOMETHING IN EVERYDAY",
    date: "Jan 2020 - Present",
  },
];

function Experience() {
  return (
    <Container className="py-5" style={{ background: '', minHeight: '100vh' }}>
      <Row>
                <Col md={12} className="home-about-social">
                  <h1 className="text-center">EXPERIENCE</h1>
                  <Row className="align-items-center mt-4">
                    <Col md={6} style={{ paddingBottom: 20 }}>
                      <img
                        src={require("../../assets/about.png")}
                        alt="home pic"
                        className="img-fluid"
                        style={{ maxHeight: "450px" }}
                      />
                    </Col>
      
                    {/* Right side: experience cards in a single column */}
                    <Col md={6}>
                      {experiences.map((experience, index) => (
                        <div
                          key={index}
                          className="d-flex align-items-center mb-4 p-3 border border-primary rounded-4 bg-blue text-white shadow experience-card"
                        >
                          {/* Icon - vertically centered */}
                          <div className="me-3 d-flex align-items-center justify-content-center">
                            <FaUserTie className="fs-4" />
                          </div>
      
                          {/* Centered content */}
                          <div className="text-center flex-grow-1">
                            <small className="text-info fw-semibold d-block">
                              {experience.date}
                            </small>
                            <h5 className="mb-1">{experience.title}</h5>
                            <p className="text-muted mb-0">{experience.company}</p>
                          </div>
                        </div>
                      ))}
                    </Col>
                  </Row>
                </Col>
              </Row>
    </Container>
  );
}

export default Experience;
