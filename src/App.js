// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <footer className="text-center p-4 bg-dark text-white">
        &copy; 2024 My Portfolio
      </footer>
    </div>
  );
}

export default App;
