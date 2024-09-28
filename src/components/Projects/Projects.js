import React from 'react';
import '../styling.css';
import { Container, Carousel, Button } from 'react-bootstrap';

function Projects() {
  return (
    <section id="projects" className="p-5 bg-dark bg-gradient custom-heading">
      <Container>
        <h2 className="text-center mb-4 text-light text-shadow">Projects</h2>

        <Carousel>
          {/* Finder Project */}
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="logo512.png"
              alt="Finder Project"
            />
            <Carousel.Caption>
              <h3 className='text-shadow'>Finder</h3>
              <p className="justified-text text-shadow">
                Finder is a web-based app that helps university students and office workers find accommodations. It uses React.js.
              </p>
              <Button variant="primary" href="https://github.com/sjsh23/Finder.-ASP.Net-.git">View Project</Button>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Galaxy Cinema Project */}
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="nextJs.png"
              alt="Galaxy Cinema Project"
            />
            <Carousel.Caption>
              <h3 className='text-shadow'>Galaxy Cinema</h3>
              <p className="justified-text text-shadow">
                Galaxy Cinema is a web app for booking movie tickets. It uses Next.js and has a fully functional backend.
              </p>
              <Button variant="primary" href="https://github.com/dhirojap/cinema">View Project</Button>
            </Carousel.Caption>
          </Carousel.Item>

          {/* CalcWithSupport Project */}
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="logo512.png"
              alt="CalcWithSupport Project"
            />
            <Carousel.Caption>
              <h3 className='text-shadow'>CalcWithSupport</h3>
              <p className="justified-text text-shadow">
                CalcWithSupport is a web-based calculator with a support page feature. It is built using React.js.
              </p>
              <Button variant="primary" href="https://github.com/sjsh23/Calc3WithSupport">View Project</Button>
            </Carousel.Caption>
          </Carousel.Item>

          {/* MakeMeUppzz Project */}
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="pngegg.png"
              alt="MakeMeUppzz Project"
            />
            <Carousel.Caption>
              <h3 className='text-shadow'>MakeMeUppzz</h3>
              <p className="justified-text text-shadow">
                MakeMeUppzz is a C# ASP.Net web app using ado.net. It showcases models, entities, CRUD operations, and more.
              </p>
              <Button variant="primary" href="https://github.com/sjsh23/MakeMeUpzz.git">View Project</Button>
            </Carousel.Caption>
          </Carousel.Item>

          {/* JCIWeb Project */}
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="HTMLLogo.png"
              alt="JCIWeb Project"
            />
            <Carousel.Caption>
              <h3 className='text-shadow'>JCIWeb</h3>
              <p className="justified-text text-shadow">
                JCIWeb is a human-computer interaction project showcasing a convention center using HTML, CSS, and JavaScript.
              </p>
              <Button variant="primary" href="https://github.com/sjsh23/JCIProject.git">View Project</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="androidStudioLogo.png"
              alt="JCIWeb Project"
            />
            <Carousel.Caption>
              <h3 className='text-shadow'>SimpleMobileCalc</h3>
              <p className="justified-text text-shadow">
                SimpleMobileCalc is a simple calculator that runs on android OS using Java as the language, it showcases the basics of building a mobile app  .
              </p>
              <Button variant="primary" href="https://github.com/sjsh23/JCIProject.git">View Project</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
}

export default Projects;
