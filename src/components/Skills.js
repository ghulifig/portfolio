import React from "react";

// const batman = require.context('/Users/macbookpro2015/Desktop/portafolio/public/assets/images', true);
// const batman = require.context('../../public/assets/images', true);


export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-content">
        <h3>My <span className="heading-color">Skills</span></h3>
        <div className="skills-container">
          {/* <a href="#"><img src={batman('./python.png')} alt="Python" style={{ maxWidth: '50%' }}/></a> */
          /* <a href="#" style={{ display: 'block', textAlign: 'center' }}>
            <div>
              <img src={batman('./python.png')} alt="Python" style={{ maxWidth: '40%',marginTop: '17px' }}/>
            </div>
            <div style={{ marginTop: '5px' }}>Python</div>
          </a> */}
          <div className="skills-cositos">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"/>
              <p>PHP</p>
          </div>
          <div className="skills-cositos">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" />
              <p>Laravel</p>
          </div>
          <div className="skills-cositos">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
              <p>Java</p>
          </div>
          <div className="skills-cositos">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
              <p>Javascript</p>
          </div>
          <div className="skills-cositos">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
              <p>Node.js</p>
          </div>
          <div className="skills-cositos">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
              <p>React</p>
          </div>
          <div className="skills-cositos">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
              <p>HTML</p>
          </div>
          <div className="skills-cositos">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
              <p>CSS</p>
          </div>
          <div className="skills-cositos">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
              <p>Sass/Scss</p>
          </div>
          <div className="skills-cositos">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"/>
              <p>Tailwindcss</p>
          </div>
          <div className="skills-cositos">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
              <p>Bootstrap</p>
          </div>
          <div className="skills-cositos">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
              <p>MySQL</p>
          </div>
          <div className="skills-cositos">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" />
              <p>Oracle</p>          
          </div>
          <div className="skills-cositos">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
              <p>PostgreSQL</p>          
          </div>
          <div className="skills-cositos">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" />
              <p>npm</p>
          </div>
          <div className="skills-cositos">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
              <p>Git</p>
          </div>
          <div className="skills-cositos">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
              <p>Postman</p>
          </div>
          <div className="skills-cositos">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
              <p>Figma</p>
          </div>
        </div>
      </div>
    </section>
  );
}