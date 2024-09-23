import './App.css';

import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <main>
      <div>
        <Navbar />
        <Home />
        {/* <About /> */}
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

export default App;
