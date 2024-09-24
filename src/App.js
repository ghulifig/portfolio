import './App.css';
import './output.css';

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
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

export default App;
