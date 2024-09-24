// src/components/Projects.js
import React from 'react';
import '../styling.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Projects() {
  return (
    <section id="projects" className="p-5 bg-light custom-heading">
      <Container>
        <h2>Projects</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="logo512.png" />
              <Card.Body>
                <Card.Title>Finder</Card.Title>
                <Card.Text className='justified-text'>Finder is a software engineering project that uses React js as the framework.
                  it is a web based app that specialize in searching accommodation for uni students and office workers.
                </Card.Text>
                <Button variant="primary" href="https://github.com/sjsh23/Finder.-ASP.Net-.git">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="nextJs.png" />
              <Card.Body>
                <Card.Title>Galaxy Cinema</Card.Title>
                <Card.Text className='justified-text'>Galaxy Cinema is a web based application that specialize in ordering movie tickets. 
                  It is an Binus's IT Division advanced bootcamp group project and uses Next js framework with working backend.</Card.Text>
                <Button variant="primary" href="https://github.com/dhirojap/cinema">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="logo512.png" />
              <Card.Body>
                <Card.Title>CalcWithSupport</Card.Title>
                <Card.Text className='justified-text'>CalcWithSupport is a web based
                  calculator. It has a question mark button that leads to support page. It is also
                  an Binus's IT Division advanced bootcamp individual project and uses React js framework.
          
                </Card.Text>
                <Button variant="primary" href="https://github.com/sjsh23/Calc3WithSupport">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
