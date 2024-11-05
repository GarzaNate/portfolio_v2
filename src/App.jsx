import React from "react";
import { HashRouter as Router } from "react-router-dom"; // Using HashRouter for scrolling
// import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="scroll-smooth">
      <Router>
        <Header />
        <div id="home">
          <Home />
        </div>
        {/* <div id="about">
          <About />
        </div> */}
        <div id="projects">
          <Projects />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
