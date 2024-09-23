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
                <h2>SGR.PY <div className="heading-color">Civil Registry Management System</div></h2>
                System developed for the Civil Registry of Paraguay for the issuance of citizens' documents.
                <div class="flex flex-wrap gap-2">
                  <div class="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                    <p class="text-normal text-sm font-medium">React</p>
                  </div>
                  <div class="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                    <p class="text-normal text-sm font-medium">Next.js</p>
                  </div>
                  <div class="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                    <p class="text-normal text-sm font-medium">Typescript</p>
                  </div>
                  <div class="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                    <p class="text-normal text-sm font-medium">Tailwindcss</p>
                  </div>
                  <div class="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                    <p class="text-normal text-sm font-medium">Material UI</p>
                  </div>
                  <div class="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                    <p class="text-normal text-sm font-medium">Redux Toolkit</p>
                  </div>
                  <div class="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                    <p class="text-normal text-sm font-medium">React Query</p>
                  </div>
                  <div class="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                    <p class="text-normal text-sm font-medium">Express.js</p>
                  </div>
                  <div class="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                    <p class="text-normal text-sm font-medium">PostgreSQL</p>
                  </div>
                  <div class="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                    <p class="text-normal text-sm font-medium">Firebase</p>
                  </div>
                  <div class="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                    <p class="text-normal text-sm font-medium">AWS Amplify</p>
                  </div>
                  <div class="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                    <p class="text-normal text-sm font-medium">Cypress</p>
                  </div>
                  <div class="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                    <p class="text-normal text-sm font-medium">Storybook</p>
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
                  <p>Laravel</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}