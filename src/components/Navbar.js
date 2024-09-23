import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("#home");

  // Función para manejar el cambio del link activo
  const handleLinkClick = (link) => {
    setActiveLink(link);
    // Desplaza suavemente a la sección correspondiente
    document.querySelector(link).scrollIntoView({ behavior: "smooth" });
  };

  // Función para detectar el desplazamiento de la página
  const handleScroll = () => {
    const sections = document.querySelectorAll("section"); // Asumiendo que las secciones tienen la etiqueta <section>
    let currentSection = "#home"; // Predeterminado a la sección "home"
    
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; // Ajuste de 100 px para el offset
      if (window.scrollY >= sectionTop) {
        currentSection = `#${section.getAttribute("id")}`;
      }
    });

    setActiveLink(currentSection); // Cambia el link activo
  };

  // Agrega el event listener cuando el componente se monta
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Limpia el event listener cuando el componente se desmonta
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <h3 className="logo">&lt;<span className="heading-color">GF</span>/&gt;</h3>
      <div className="flex items-center gap-6 flex-row">
        <nav className="navbar">
          <a href="#home" className={`${activeLink === "#home" ? "nav-activo" : "nav-inactivo"}`} onClick={() => handleLinkClick("#home")}>Home</a>
          <a href="#skills" className={`${activeLink === "#skills" ? "nav-activo" : "nav-inactivo"}`} onClick={() => handleLinkClick("#skills")}>Skills</a>
          <a href="#projects" className={`${activeLink === "#projects" ? "nav-activo" : "nav-inactivo"}`} onClick={() => handleLinkClick("#projects")}>Projects</a>
          <a href="#contact" className={`${activeLink === "#contact" ? "nav-activo" : "nav-inactivo"}`} onClick={() => handleLinkClick("#contact")}>Contact</a>
        </nav>
        <div className="divider">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dividers">
            <path d="M12 5v30"></path>
          </svg>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-moon-star">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            <path d="M19 3v4"></path>
            <path d="M21 5h-4"></path>
        </svg> */}
      </div>
    </header>
  );
}
