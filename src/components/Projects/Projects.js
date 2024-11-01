// src/components/Projects.js
import React from 'react';
import '../styling.css';
import { Container, Carousel, Button } from 'react-bootstrap';

function Projects() {
  return (
    <section id="projects" className="p-5 custom-size projects-section">
      <Container>
        <h2 className="text-center mb-5 text-light project-heading">Projects</h2>

        <Carousel className="project-carousel">
          {/* Finder Project */}
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img rounded shadow-lg"
              src="logo512.png"
              alt="Finder Project"
            />
            <Carousel.Caption className="project-caption">
              <h3>Finder</h3>
              <p>
                Finder is a web-based app that helps university students and office workers find accommodations. It uses React.js.
              </p>
              <Button variant="light" href="https://github.com/sjsh23/Finder.-ASP.Net-.git" className="project-btn">View Project</Button>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Galaxy Cinema Project */}
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img rounded shadow-lg"
              src="nextJs.png"
              alt="Galaxy Cinema Project"
            />
            <Carousel.Caption className="project-caption">
              <h3>Galaxy Cinema</h3>
              <p>
                Galaxy Cinema is a web app for booking movie tickets. It uses Next.js and has a fully functional backend.
              </p>
              <Button variant="light" href="https://github.com/dhirojap/cinema" className="project-btn">View Project</Button>
            </Carousel.Caption>
          </Carousel.Item>

          {/* CalcWithSupport Project */}
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img rounded shadow-lg"
              src="logo512.png"
              alt="CalcWithSupport Project"
            />
            <Carousel.Caption className="project-caption">
              <h3>CalcWithSupport</h3>
              <p>
                CalcWithSupport is a web-based calculator with a support page feature. It is built using React.js.
              </p>
              <Button variant="light" href="https://github.com/sjsh23/Calc3WithSupport" className="project-btn">View Project</Button>
            </Carousel.Caption>
          </Carousel.Item>

          {/* MakeMeUppzz Project */}
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img rounded shadow-lg"
              src="pngegg.png"
              alt="MakeMeUppzz Project"
            />
            <Carousel.Caption className="project-caption">
              <h3>MakeMeUppzz</h3>
              <p>
                MakeMeUppzz is a C# ASP.Net web app using ado.net. It showcases models, entities, CRUD operations, and more.
              </p>
              <Button variant="light" href="https://github.com/sjsh23/MakeMeUpzz.git" className="project-btn">View Project</Button>
            </Carousel.Caption>
          </Carousel.Item>

          {/* JCIWeb Project */}
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img rounded shadow-lg"
              src="HTMLLogo.png"
              alt="JCIWeb Project"
            />
            <Carousel.Caption className="project-caption">
              <h3>JCIWeb</h3>
              <p>
                JCIWeb is a human-computer interaction project showcasing a convention center using HTML, CSS, and JavaScript.
              </p>
              <Button variant="light" href="https://github.com/sjsh23/JCIProject.git" className="project-btn">View Project</Button>
            </Carousel.Caption>
          </Carousel.Item>

          {/* SimpleMobileCalc Project */}
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img rounded shadow-lg"
              src="androidStudioLogo.png"
              alt="SimpleMobileCalc Project"
            />
            <Carousel.Caption className="project-caption">
              <h3>SimpleMobileCalc</h3>
              <p>
                SimpleMobileCalc is a simple calculator that runs on android OS using Java as the language, showcasing the basics of building a mobile app.
              </p>
              <Button variant="light" href="https://github.com/sjsh23/MobileCalcApp.git" className="project-btn">View Project</Button>
            </Carousel.Caption>
          </Carousel.Item>

          {/* TaskManagerApp Project */}
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img rounded shadow-lg"
              src="androidStudioLogo.png"
              alt="TaskManagerApp Project"
            />
            <Carousel.Caption className="project-caption">
              <h3>TaskManagerApp</h3>
              <p>
                TaskManagerApp is a Java mobile app that helps organize tasks by adding category, deadline, task description, and a simple search function.
              </p>
              <Button variant="light" href="https://github.com/sjsh23/TaskManagerApp.git" className="project-btn">View Project</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
}

export default Projects;
