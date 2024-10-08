// src/components/About.js
import React from 'react';
import '../styling.css';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <section id="about" className="p-5 d-flex justify-content-center align-items-center custom-heading">
      <Container>
        <h2 className="text-center mb-4">About Me</h2>
        <Row className="justify-content-center align-items-center">
          <Col md={6} className="justified-text">
            <p>
              I am a student in Bina Nusantara university majoring in computer science. I specialize in web and mobile development with experience in building modern, responsive web and mobile applications using React, JavaScript, CSS frameworks, and Java.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <img src="/profilepicture.jpg" alt="Profile" className="img-fluid rounded-circle" style={{ maxWidth: '200px', height: 'auto'}}  />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
