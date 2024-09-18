
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
