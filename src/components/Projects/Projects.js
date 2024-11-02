// src/components/Projects.js
import React from 'react';
import '../styling.css';
import { Container, Card, Col, Row, Carousel, Button } from 'react-bootstrap';

function Projects() {
  return (
    <section id="projects" className="p-5 custom-size projects-section">
      <Container>
        <h2 className="text-center mb-5 text-light project-heading">Projects</h2>

        <Carousel className="project-carousel">
          {/* Finder Project */}
          <Carousel.Item>
            <Row className="d-flex justify-content-center">
              <Col md={4}>
                <Card className="project-card shadow-lg">
                  <Card.Img variant="top" src="logo512.png" className="carousel-img" />
                  <Card.Body>
                    <Card.Title>Finder</Card.Title>
                    <Card.Text>
                      Finder is a web-based app that helps university students and office workers find accommodations. It uses React.js.
                    </Card.Text>
                    <Button variant="light" href="https://github.com/sjsh23/Finder.-ASP.Net-.git" className="project-btn">View Project</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>

          {/* Galaxy Cinema Project */}
          <Carousel.Item>
            <Row className="d-flex justify-content-center">
              <Col md={4}>
                <Card className="project-card shadow-lg">
                  <Card.Img variant="top" src="nextJs.png" className="carousel-img" />
                  <Card.Body>
                    <Card.Title>Galaxy Cinema</Card.Title>
                    <Card.Text>
                      Galaxy Cinema is a web app for booking movie tickets. It uses Next.js and has a fully functional backend.
                    </Card.Text>
                    <Button variant="light" href="https://github.com/dhirojap/cinema" className="project-btn">View Project</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>

          {/* CalcWithSupport Project */}
          <Carousel.Item>
            <Row className="d-flex justify-content-center">
              <Col md={4}>
                <Card className="project-card shadow-lg">
                  <Card.Img variant="top" src="logo512.png" className="carousel-img" />
                  <Card.Body>
                    <Card.Title>CalcWithSupport</Card.Title>
                    <Card.Text>
                      CalcWithSupport is a web-based calculator with a support page feature. It is built using React.js.
                    </Card.Text>
                    <Button variant="light" href="https://github.com/sjsh23/Calc3WithSupport" className="project-btn">View Project</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>

          {/* MakeMeUppzz Project */}
          <Carousel.Item>
            <Row className="d-flex justify-content-center">
              <Col md={4}>
                <Card className="project-card shadow-lg">
                  <Card.Img variant="top" src="pngegg.png" className="carousel-img" />
                  <Card.Body>
                    <Card.Title>MakeMeUppzz</Card.Title>
                    <Card.Text>
                      MakeMeUppzz is a C# ASP.Net web app using ado.net. It showcases models, entities, CRUD operations, and more.
                    </Card.Text>
                    <Button variant="light" href="https://github.com/sjsh23/MakeMeUpzz.git" className="project-btn">View Project</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>

          {/* JCIWeb Project */}
          <Carousel.Item>
            <Row className="d-flex justify-content-center">
              <Col md={4}>
                <Card className="project-card shadow-lg">
                  <Card.Img variant="top" src="HTMLLogo.png" className="carousel-img" />
                  <Card.Body>
                    <Card.Title>JCIWeb</Card.Title>
                    <Card.Text>
                      JCIWeb is a human-computer interaction project showcasing a convention center using HTML, CSS, and JavaScript.
                    </Card.Text>
                    <Button variant="light" href="https://github.com/sjsh23/JCIProject.git" className="project-btn">View Project</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>

          {/* SimpleMobileCalc Project */}
          <Carousel.Item>
            <Row className="d-flex justify-content-center">
              <Col md={4}>
                <Card className="project-card shadow-lg">
                  <Card.Img variant="top" src="androidStudioLogo.png" className="carousel-img" />
                  <Card.Body>
                    <Card.Title>SimpleMobileCalc</Card.Title>
                    <Card.Text>
                      SimpleMobileCalc is a simple calculator that runs on android OS using Java as the language, showcasing the basics of building a mobile app.
                    </Card.Text>
                    <Button variant="light" href="https://github.com/sjsh23/MobileCalcApp.git" className="project-btn">View Project</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>

          {/* TaskManagerApp Project */}
          <Carousel.Item>
            <Row className="d-flex justify-content-center">
              <Col md={4}>
                <Card className="project-card shadow-lg">
                  <Card.Img variant="top" src="androidStudioLogo.png" className="carousel-img" />
                  <Card.Body>
                    <Card.Title>TaskManagerApp</Card.Title>
                    <Card.Text>
                      TaskManagerApp is a Java mobile app that helps organize tasks by adding category, deadline, task description, and a simple search function.
                    </Card.Text>
                    <Button variant="light" href="https://github.com/sjsh23/TaskManagerApp.git" className="project-btn">View Project</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
}

export default Projects;
