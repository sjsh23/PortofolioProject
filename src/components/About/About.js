// src/components/About.js
import React from 'react';
import '../styling.css';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <section id="about" className="about-section p-5 d-flex justify-content-center align-items-center">
      <Container>
        <h2 className="text-center mb-5 about-title">About Me</h2>
        <Row className="justify-content-center align-items-center">
          <Col md={6} className="about-text">
            <p>
              I am a student at Bina Nusantara University majoring in Computer Science. I specialize in web and mobile development with experience in building modern, responsive web and mobile applications using React, JavaScript, CSS frameworks, and Java.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <img src="/profilepicture.jpg" alt="Profile" className="profile-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
