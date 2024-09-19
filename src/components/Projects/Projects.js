// src/components/Projects.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Projects() {
  return (
    <section id="projects" className="p-5 bg-light">
      <Container>
        <h2>Projects</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="project1.jpg" />
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>Details about project 1.</Card.Text>
                <Button variant="primary" href="#">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="project2.jpg" />
              <Card.Body>
                <Card.Title>Project 2</Card.Title>
                <Card.Text>Details about project 2.</Card.Text>
                <Button variant="primary" href="#">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="project3.jpg" />
              <Card.Body>
                <Card.Title>Project 3</Card.Title>
                <Card.Text>Details about project 3.</Card.Text>
                <Button variant="primary" href="#">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
