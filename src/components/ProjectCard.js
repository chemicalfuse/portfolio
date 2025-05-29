import { Col } from "react-bootstrap";

const ProjectCard = ({ url, description, imgUrl, title }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a target="_blank" href="url">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
export default ProjectCard;
