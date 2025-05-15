import { Col, Container, Row } from "react-bootstrap";

const Projects = () => {
  const projects = [
    {
      title: "Buddha Tea",
      description: "Development & Design",
      imgUrl: null,
      url: "#",
    },
  ];
  return (
    <section id="projects" className="project">
      <Container>
        <Row>
          <Col xs={12} md={12} xl={12}>
            <div className="projects-bx">
              <h2>Projects</h2>
              <p>
                Completed multiple projects involving data analysis, physics
                simulations, and creative design, showcasing both technical
                depth and innovative thinking. Each project reflects a
                commitment to precision, problem-solving, and delivering
                impactful results.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Projects;
