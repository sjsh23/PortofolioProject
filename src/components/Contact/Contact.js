// src/components/Contact.js
import React from 'react';
import '../styling.css';
import { Container } from 'react-bootstrap';

function Contact() {
  return (
    <section id="contact" className="p-5 custom-heading">
      <Container>
        <h2>Contact Me</h2>
        <p>Email: [satyasiddhi.josh@binus.ac.id]</p>
      </Container>
    </section>
  );
}

export default Contact;
