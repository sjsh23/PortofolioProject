// src/components/Home.js
import React from 'react';
import '../styling.css';
import { Container } from 'react-bootstrap';
import { ReactTyped as Typed } from 'react-typed';

function Home() {
  return (
    <section id="home" className="p-5 bg-light text-center custom-heading bg-gradient home-section">
      <Container>
        <h1>Hi, I'm {' '}
          [
        <Typed
            strings={['Satyasiddhi Josh']}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
          ]
          </h1>
        <p>Web Developer | Mobile Developer | Coder</p>
      </Container>
    </section>
  );
}

export default Home;
