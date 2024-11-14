// src/components/Contact.js
import React from 'react';
import '../styling.css';
import { Container, Row, Card, Col, Image } from 'react-bootstrap';

function Contact() {
  return (
    <section id="contact" className="p-5 custom-heading custom-size">
      <Container>
      <h2 className="text-center mb-4">Contact</h2>
        <Row className="d-flex justify-content-center">
          <Col md={6}>
            <Card className="p-4 shadow-sm text-decoration-none">
              <Card.Body className='text-decoration-none'>
                <Card.Text className='text-decoration-none'>
                <Image 
                    src="emailLogo.png" 
                    alt="GitHub logo" 
                    className="img-fluid me-2" 
                    style={{ width: '24px'}} 
                  />
                  Email: joshsatyasiddhi@gmail.com
                  </Card.Text>
                

                <Card.Text className='text-decoration-none'>

                  <Image 
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                    alt="GitHub logo" 
                    className="img-fluid me-2" 
                    style={{ width: '24px'}} 
                  />
                  Github:
                  <a href="https://github.com/sjsh23" target="_blank" rel="noopener noreferrer" className='text-decoration-none'>
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
                  <a href="https://www.linkedin.com/in/satyasiddhi-josh-721916228/" target="_blank" rel="noopener noreferrer" className='text-decoration-none'>
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
