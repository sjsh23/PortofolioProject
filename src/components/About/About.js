// src/components/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <section id="about" className="p-5">
      <Container>
        <h2>About Me</h2>
        <Row>
          <Col md={6}>
            <p>
              I am a web developer with experience in building modern, responsive web applications using React, JavaScript, and CSS frameworks.
            </p>
          </Col>
          <Col md={6}>
            <img src="profile.jpg" alt="Profile" className="img-fluid rounded-circle" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
