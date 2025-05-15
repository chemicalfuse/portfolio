import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/img/logo.png";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Facebook, Github, Linkedin } from "react-bootstrap-icons";
import { HashLink } from "react-router-hash-link";
const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              onClick={() => onUpdateActiveLink("home")}
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              onClick={() => onUpdateActiveLink("skills")}
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
            >
              skills
            </Nav.Link>
            <Nav.Link
              onClick={() => onUpdateActiveLink("projects")}
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
            >
              projects
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <Linkedin size={20} color="white" />
              </a>
              <a href="#">
                <Facebook size={20} color="white" />
              </a>
              <a href="#">
                <Github size={20} color="white" />
              </a>
            </div>
            <HashLink to="#connect">
              <button className="vvd">
                <span>Lets Connect</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
