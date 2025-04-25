import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import ATM from "../assets/projects/ATM.png";
import front from "../assets/projects/front.png";
import country from "../assets/projects/country.png";
import EMP from "../assets/projects/EMP.png";
import NumberGuess from "../assets/projects/guess_number.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={country}
              isBlog={false}
              title="Country Selection"
              description="This MERN Stack Country Management System: A CRUD Application for Efficient Country Information Handling
                            This project is a country selection CRUD application built with the MERN stack (MongoDB, Express, React, Node.js). Users can add, update, delete, and view country details, including the country name, an auto-fetched image, and a brief description. The application supports pagination for easy browsing of countries, displaying them in an organized list. The backend handles data management via API routes, while the frontend offers a responsive interface to interact with the data. It’s an efficient and user-friendly solution for managing country information."
              ghLink="https://github.com/AkashVaishnav/country-selection"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Social Media"
              description="This platform features a responsive interface built with Reactjs and CSS, allowing users to easily manage their profiles and posts through CRUD activities. The option to follow other users and interact with their posts (like or dislike) is also available, with suggestions for new users to follow. Users can only view posts from their followed users and can only engage in chat with those they follow. The backend is powered by Nodejs and Expressjs server, while MongoDB is utilized as the database."
              ghLink="https://github.com/19sajib/social-media"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={front}
              isBlog={false}
              title="EdgeSocial"
              description="This web application offers a dynamic social media platform where users can customize their experience through a variety of theme options. Designed with user preferences in mind, the platform primarily focuses on theme customization, allowing users to personalize their interface to better suit their style and needs. Whether you're interacting with friends or scrolling through your feed, you can enjoy a truly unique experience."
              ghLink="https://github.com/"
              demoLink="https://akashvaishnav.github.io/Social-Media-Website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ATM}
              isBlog={false}
              title="ATM Machine"
              description="The ATM Management System is a Java application designed to simulate real-world ATM operations. Using CRUD (Create, Read, Update, Delete) functionality, it allows users to manage their accounts, perform withdrawals, deposits, and check balances. The system provides a secure login feature to protect user data and ensure authorized access. Transactions are efficiently handled with real-time updates, and users can view and modify their account details at any time. The user-friendly interface makes navigating through operations simple and intuitive. This project demonstrates a fundamental approach to banking system management, making it ideal for both practical learning and development."
              ghLink="https://github.com/AkashVaishnav/ATM_Machine"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EMP}
              isBlog={false}
              title="Employee Management System"
              description="The Employee Management System is a Java-based application that allows administrators to manage employee records through CRUD (Create, Read, Update, Delete) operations. It enables adding new employees, updating their details, viewing their information, and removing records as needed. The system supports storing important employee data such as name, position, department, salary, and contact information. Designed for ease of use, the system provides a simple interface for administrators to quickly navigate and manage employee data. It ensures data accuracy with real-time updates and offers a secure way to handle sensitive employee information. This project serves as a practical tool for managing employee data efficiently and effectively."
              ghLink="https://github.com/AkashVaishnav/Employee_M_S"
              // demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NumberGuess}
              isBlog={false}
              title="Number Guessing System"
              description="The Number Guessing Game is a simple Java-based application where the user is tasked with guessing a randomly generated number between 1 and 100. The system provides feedback after each guess, indicating whether the correct number is higher or lower than the guessed value. The game continues until the user guesses the correct number. It features a user-friendly interface that allows players to enter their guesses and receive real-time feedback. This project serves as a great introduction to Java programming, demonstrating concepts like loops, conditionals, and random number generation. The game can be easily modified to add additional features such as a scoring system or difficulty levels."
              ghLink="https://github.com/AkashVaishnav/Number_Guessing_System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
