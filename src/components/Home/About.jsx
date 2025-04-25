import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaUserTie } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

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
    company: "Biztechnosys Pvt. Ltd.",
    date: "Oct 2023 - July 2024",
  },
  {
    title: "SELF EMPLOYED",
    company: "Code and build something in everyday.",
    date: "Jan 2020 - Present",
  },
];

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, my name is <span className="yellow">Akash Vaishnav </span>
              and I'm from <span className="yellow"> Ahmedabad, India. </span>
              <br />
              <br />
              I recently graduated with a Bachelor's degree in Computer
              Engineering in 2024.
              <br />
              <br />
              As a<b className="yellow"> Full-Stack </b>developer, I enjoy
              tackling new challenges and continuously expanding my skillset.
              <br />
              <br />I am proficient in
              <b className="yellow"> Javascript, </b>
              as well as have knowledge in programming languages such as Java,
              Python, Laravel,
              <b className="yellow"> Data Starcture and Algorithms.</b>
              <br />
              <br />I have a passion for working with{" "}
              <b className="yellow">Node.js, MongoDB,</b> and
              <i>
                <b className="yellow">
                  {" "}
                  modern Javascript libraries and frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="yellow"> React.js</b>
              </i>
              <br />
              <br />I am also interested in building new
              <i>
                <b className="yellow"> Web Technologies and Products, </b>
                as well as exploring areas related to
                <b className="yellow"> Artificial Intelligence.</b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

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

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{" "}
              <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AkashVaishnav"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                    <a
                      href="https://twitter.com/19sajib"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/akash-vaishnav-055219212/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/Akash_Vaishnav23/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <SiLeetcode />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
