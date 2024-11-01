// src/components/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import '../styling.css';
import { Container, Button } from 'react-bootstrap';
import { ReactTyped as Typed } from 'react-typed';

function Home() {
  return (
    <section
      id="home"
      className="home-section d-flex align-items-center"
      style={{ height: '100vh', background: 'linear-gradient(135deg, #f0f2f5, #d4e9ff)' }}
    >
      <Container className="text-center">
        <motion.h1
          className="display-3 text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm{' '}
          <Typed
            strings={['Satyasiddhi Josh']}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </motion.h1>
        <motion.p
          className="lead text-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Web Developer | Mobile Developer | Coder
        </motion.p>
        <Button variant="primary" size="lg" className="mt-3 btn-custom" href='#contact'>
          Contact Me
        </Button>
      </Container>
    </section>
  );
}

export default Home;