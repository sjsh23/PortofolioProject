// src/components/Home.js
import React from 'react';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <section id="home" className="p-5 bg-light text-center">
      <Container>
        <h1>Hi, I'm [Your Name]</h1>
        <p>Web Developer | Designer | Coder</p>
      </Container>
    </section>
  );
}

export default Home;
