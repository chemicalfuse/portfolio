import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import "react-circular-progressbar/dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "react-multi-carousel/lib/styles.css";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </Router>
  );
};

export default App;
