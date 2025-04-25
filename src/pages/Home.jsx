import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../assets/about.png'
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';

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

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Akash Vaishnav</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home