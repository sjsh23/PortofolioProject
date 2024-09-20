// src/components/Home.js
import React from 'react';
import '../styling.css';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <section id="home" className="p-5 bg-light text-center custom-heading">
      <Container>
        <h1>Hi, I'm [Satyasiddhi Josh]</h1>
        <p>Web Developer | Mobile Developer | Coder</p>
      </Container>
    </section>
  );
}

export default Home;
