// src/App.jsq
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css';
import '../src/components/styling.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <footer className="text-center p-4 bg-dark text-white custom-heading">
        &copy; 2024 Satyasiddhi Josh
      </footer>
    </div>
  );
}

export default App;
