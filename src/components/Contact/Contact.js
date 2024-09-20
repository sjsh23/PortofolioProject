// src/components/Contact.js
import React from 'react';
import '../styling.css';
import { Container, Row, Card, Col, Image } from 'react-bootstrap';

function Contact() {
  return (
    <section id="contact" className="p-5 custom-heading">
      <Container>
      <h2 className="text-center mb-4">Contact</h2>
        <Row className="d-flex justify-content-center">
          <Col md={6}>
            <Card className="p-4 shadow-sm">
              <Card.Body>
                <Card.Text>
                <Image 
                    src="emailLogo.png" 
                    alt="GitHub logo" 
                    className="img-fluid me-2" 
                    style={{ width: '24px'}} 
                  />
                  Email: satyasiddhi.josh@binus.ac.id
                  </Card.Text>
                

                <Card.Text>

                  <Image 
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                    alt="GitHub logo" 
                    className="img-fluid me-2" 
                    style={{ width: '24px'}} 
                  />
                  Github:
                  <a href="https://github.com/sjsh23" target="_blank" rel="noopener noreferrer">
                    sjsh23
                  </a>
                </Card.Text>
                <Card.Text>

                  <Image 
                    src="LinkedInLogo.png" 
                    alt="GitHub logo" 
                    className="img-fluid me-2" 
                    style={{ width: '24px'}} 
                  />
                  LinkedIn:
                  <a href="https://www.linkedin.com/in/satyasiddhi-josh-721916228/" target="_blank" rel="noopener noreferrer">
                    satyasiddhi josh
                  </a>
                </Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
