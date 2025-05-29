import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import bannerImg from "../assets/img/banner-img.png";
import { HashLink } from "react-router-hash-link";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

const Banner = () => {
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const toRotate = [
    "CyberSecurity",
    "Backend Develper",
    "Frontend Development",
  ];
  const period = 2000;
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  });
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  {" "}
                  <span className="tagLine">Welcome to my Portfolio</span>
                  <h1>
                    {`I'm Anand Keshri`}{" "}
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I am Anand Keshri and i am passionate learner in the IT
                    sphere with a strong interest in cybersecurity. With a solid
                    foundation in backend development, I work confidently with
                    Node.js and related technologies, building secure and
                    scalable systems. I enjoy exploring how systems can be
                    protected, diving into ethical hacking, and staying up to
                    date with cybersecurity trends. I am well-rounded skill set
                    bridges software development and digital defense, making me
                    a valuable asset in today’s tech-driven world.
                  </p>
                  <HashLink to="#connect">
                    <button>
                      Let's Connect <ArrowRightCircle size={25} />
                    </button>
                  </HashLink>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={bannerImg} alt="Banner Img"></img>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Banner;
