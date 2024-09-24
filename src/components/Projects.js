import React from "react";

const projects = require.context('../../public/assets/images', true);

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h3>Latest <span className="heading-color">Projects</span></h3>
        <div className="projects-container">
          <div className="projects-cositos">
            <div className="projects-mitad">
              <div className="p-img">
                <img src={projects('./sgrpy-dark.png')}/>
              </div>
              <div className="p-text">
                <h2>SGR.PY <div className="heading-color">Civil Registry Management System</div></h2><br></br>
                <p>System developed for the Civil Registry of Paraguay for the issuance of citizens' documents.</p>
                <br></br>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center justify-center rounded-xl projects-languages px-8 py-1">
                    <p>PHP</p>
                  </div>
                  <div className="flex items-center justify-center rounded-xl projects-languages px-5 py-1">
                    <p>JavaScript</p>
                  </div>
                  <div className="flex items-center justify-center rounded-xl projects-languages px-5 py-1">
                    <p>HTML</p>
                  </div>
                  <div className="flex items-center justify-center rounded-xl projects-languages px-5 py-1">
                    <p>CSS</p>
                  </div>
                  <div className="flex items-center justify-center rounded-xl projects-languages px-5 py-1">
                    <p>Bootstrap</p>
                  </div>
                  <div className="flex items-center justify-center rounded-xl projects-languages px-5 py-1">
                    <p>Git</p>
                  </div>
                  <div className="flex items-center justify-center rounded-xl projects-languages px-5 py-1">
                    <p>MySQL</p>
                  </div>
                  <div className="flex items-center justify-center rounded-xl projects-languages px-5 py-1">
                    <p>Oracle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-cositos">
            <div className="projects-mitad">
              <div className="p-img">
                <img src={projects('./busqueda-dark.png')}/>
              </div>
              <div className="p-text">
                <h2>Búsqueda REC<div className="heading-color">Search System</div></h2><br></br>
                <p>System developed for the Civil Registry of Paraguay to search for individuals in the databases.
                </p>
                <br></br>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center justify-center rounded-xl projects-languages px-8 py-1">
                    <p>PHP</p>
                  </div>
                  <div className="flex items-center justify-center rounded-xl projects-languages px-5 py-1">
                    <p>JavaScript</p>
                  </div>
                  <div className="flex items-center justify-center rounded-xl projects-languages px-5 py-1">
                    <p>HTML</p>
                  </div>
                  <div className="flex items-center justify-center rounded-xl projects-languages px-5 py-1">
                    <p>CSS</p>
                  </div>
                  <div className="flex items-center justify-center rounded-xl projects-languages px-5 py-1">
                    <p>Bootstrap</p>
                  </div>
                  <div className="flex items-center justify-center rounded-xl projects-languages px-5 py-1">
                    <p>Git</p>
                  </div>
                  <div className="flex items-center justify-center rounded-xl projects-languages px-5 py-1">
                    <p>MySQL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}