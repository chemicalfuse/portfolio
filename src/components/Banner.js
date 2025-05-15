import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import bannerImg from "../assets/img/banner-img.png";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center"></Row>
        <Col xs={12} md={6} xl={7}></Col>
        <Col xs={12} md={6} xl={5}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__zoomIn" : ""}
              >
                <img src={bannerImg} alt="Banner Img"></img>
              </div>
            )}
          </TrackVisibility>
        </Col>
      </Container>
    </section>
  );
};
export default Banner;
