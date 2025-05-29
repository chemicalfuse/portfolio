import { Col, Container, Row } from "react-bootstrap";
import buddha from "../assets/img/buddha.png";
import adminPanel from "../assets/img/adminPanel.png";
import space from "../assets/img/space.png";
import netflix from "../assets/img/netflix.png";
import weatherMobile from "../assets/img/weatherMobile.png";
import chatgpt from "../assets/img/chatgpt.png";
import weather from "../assets/img/weather.png";
import toDo from "../assets/img/toDo.png";
import telegram from "../assets/img/telegram.png";
import currency from "../assets/img/currency.png";
import figma from "../assets/img/figma.png";
import TrackVisibility from "react-on-screen";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Buddha Tea",
      description: "Development & Design",
      imgUrl: buddha,
      url: "https://github.com/chemicalfuse/Buddha-tea",
    },
    {
      title: "Admin Panel",
      description: "Development",
      imgUrl: adminPanel,
      url: "https://github.com/chemicalfuse/adminpanel",
    },
    {
      title: "Space",
      description: "Development & Design",
      imgUrl: space,
      url: "https://github.com/chemicalfuse/space-",
    },
    {
      title: "Movie App",
      description: "Development & Design",
      imgUrl: netflix,
      url: "https://github.com/chemicalfuse/movie-app",
    },
    {
      title: "Mobile Weather App",
      description: " Mobile Development",
      imgUrl: weatherMobile,
      url: "https://github.com/chemicalfuse/Weather-Project-mob",
    },
    {
      title: "Chat GPT",
      description: "Development",
      imgUrl: chatgpt,
      url: "https://github.com/chemicalfuse/Chat-GPT",
    },
    {
      title: "Weather App",
      description: "Development",
      imgUrl: weather,
      url: "https://github.com/chemicalfuse/Weather-App",
    },
    {
      title: "To-Do-App",
      description: "Development",
      imgUrl: toDo,
      url: "https://github.com/chemicalfuse/To-do-app",
    },
    {
      title: "Telegram Bot",
      description: "Development",
      imgUrl: telegram,
      url: "https://github.com/chemicalfuse/telegram",
    },
    {
      title: "Currancy Exchange",
      description: "Development",
      imgUrl: currency,
      url: "https://github.com/chemicalfuse/currency-exchange",
    },
    {
      title: "Figma",
      description: "Design",
      imgUrl: figma,
      url: "https://www.figma.com/design/msfAdErJGRYBB7IpMSGZMX/mobile-design?node-id=0-1&t=Ndc8WqX8qKCiUfSG-1",
    },
  ];
  return (
    <section id="projects" className="project">
      <Container>
        <Row>
          <Col xs={12} md={12} xl={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Completed multiple projects involving data analysis, physics
                    simulations, and creative design, showcasing both technical
                    depth and innovative thinking. Each project reflects a
                    commitment to precision, problem-solving, and delivering
                    impactful results.
                  </p>
                  <Row>
                    {projects.map((item, index) => (
                      <ProjectCard
                        url={item.url}
                        title={item.title}
                        description={item.description}
                        imgUrl={item.imgUrl}
                        key={index}
                      />
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Projects;
