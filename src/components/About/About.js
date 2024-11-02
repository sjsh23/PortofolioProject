// src/components/About.js
import React from 'react';
import '../styling.css';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="about-section p-5 d-flex justify-content-center align-items-center">
      <Container>
        {/* Animate the title */}
        <motion.h2
          className="text-center mb-5 about-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        <Row className="justify-content-center align-items-center">
          {/* Animate the text */}
          <Col md={6} className="about-text">
            <motion.div
              className="about-text-bubble" // Apply the bubble class here
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <p>
                I am a student at Bina Nusantara University majoring in Computer Science. I specialize in web and mobile development with experience in building modern, responsive web and mobile applications using React, JavaScript, CSS frameworks, and Java.
              </p>
            </motion.div>
          </Col>

          {/* Animate the image */}
          <Col md={6} className="text-center">
            <motion.img
              src="/profilepicture.jpg"
              alt="Profile"
              className="profile-img"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
