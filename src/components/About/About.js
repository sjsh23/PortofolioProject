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
              I am a web and mobile developer with experience in building modern, responsive web applications using React, JavaScript, CSS frameworks, and Java using Android Studio.
            </p>
          </Col>
          <Col md={6}>
            <img src="/profilepicture.jpg" alt="Profile" className="img-fluid rounded-circle" style={{ maxWidth: '200px', height: 'auto'}}  />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
