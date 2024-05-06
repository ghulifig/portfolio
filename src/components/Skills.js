import React from "react";

// const batman = require.context('/Users/macbookpro2015/Desktop/portafolio/public/assets/images', true);
const batman = require.context('../../public/assets/images', true);


export default function Skills() {
  return (
    <section class="skills" id="skills">
      <div class="skills-content">
        <h3>Skills</h3>
        <div class="skills-cositos">
          {/* <a href="#"><img src={batman('./python.png')} alt="Python" style={{ maxWidth: '50%' }}/></a> */
          /* <a href="#" style={{ display: 'block', textAlign: 'center' }}>
            <div>
              <img src={batman('./python.png')} alt="Python" style={{ maxWidth: '40%',marginTop: '17px' }}/>
            </div>
            <div style={{ marginTop: '5px' }}>Python</div>
          </a> */}
            <a href="#" style={{textAlign: 'center' }}>
              <div>
                <div style={{ paddingTop: '10px'}}>
                  <i class="devicon-php-plain colored"></i>
                </div>
                <div style={{ fontSize: '15px'}}>PHP</div>
              </div>
            </a>
            {/* <a href="#" style={{textAlign: 'center' }}>
              <div>
                <div style={{ paddingTop: '10px'}}>
                  <i class="devicon-java-plain colored"></i>
                </div>
                <div style={{ fontSize: '15px'}}>Java</div>
              </div>
            </a> */}
            <a href="#" style={{textAlign: 'center' }}>
              <div>
                <div style={{ paddingTop: '10px'}}>
                  <i class="devicon-javascript-plain colored"></i>
                </div>
                <div style={{ fontSize: '15px'}}>Javascript</div>
              </div>
            </a>
            <a href="#" style={{ textAlign: 'center' }}>
              <div>
                <div style={{ paddingTop: '10px'}}>
                  <i class="devicon-nodejs-plain colored"></i>
                </div>
                <div style={{ fontSize: '15px'}}>Node.js</div>
              </div>
            </a>
            <a href="#" style={{ textAlign: 'center' }}>
              <div>
                <div style={{ paddingTop: '10px'}}>
                  <i class="devicon-c-plain colored"></i>
                </div>
                <div style={{ fontSize: '15px'}}>C</div>
              </div>
            </a>
            <a href="#" style={{ textAlign: 'center' }}>
              <div>
                <div style={{ paddingTop: '10px'}}>
                  <i class="devicon-html5-plain colored"></i>
                </div>
                <div style={{ fontSize: '15px'}}>HTML</div>
              </div>
            </a>
            <a href="#" style={{ textAlign: 'center' }}>
              <div>
                <div style={{ paddingTop: '10px'}}>
                  <i class="devicon-css3-plain colored"></i>
                </div>
                <div style={{ fontSize: '15px'}}>CSS</div>
              </div>
            </a>
            <a href="#" style={{ textAlign: 'center' }}>
              <div>
                <div style={{ paddingTop: '10px'}}>
                  <i class="devicon-bootstrap-plain colored"></i>
                </div>
                <div style={{ fontSize: '15px'}}>Bootstrap</div>
              </div>
            </a>
            <a href="#" style={{ textAlign: 'center' }}>
              <div>
                <div style={{ paddingTop: '10px'}}>
                  <i class="devicon-npm-original-wordmark  colored"></i>
                </div>
                <div style={{ fontSize: '15px'}}>NPM</div>
              </div>
            </a>
            <a href="#" style={{ textAlign: 'center' }}>
              <div>
                <div style={{ paddingTop: '10px'}}>
                  <i class="devicon-react-plain colored"></i>
                </div>
                <div style={{ fontSize: '15px'}}>React</div>
              </div>
            </a>
            <a href="#" style={{ textAlign: 'center' }}>
              <div>
                <div style={{ paddingTop: '10px'}}>
                  <i class="devicon-laravel-original colored"></i>
                </div>
                <div style={{ fontSize: '15px'}}>Laravel</div>
              </div>
            </a>
            <a href="#" style={{ textAlign: 'center' }}>
              <div>
                <div style={{ paddingTop: '10px'}}>
                  <i class="devicon-postgresql-plain colored"></i>
                </div>
                <div style={{ fontSize: '15px'}}>PostgreSQL</div>
              </div>
            </a>
            <a href="#" style={{ textAlign: 'center' }}>
              <div>
                <div style={{ paddingTop: '10px'}}>
                  <i class="devicon-mysql-original colored"></i>
                </div>
                <div style={{ fontSize: '15px'}}>mySQL</div>
              </div>
            </a>
            <a href="#" style={{ textAlign: 'center' }}>
              <div>
                <div style={{ paddingTop: '10px'}}>
                  <i class="devicon-azuresqldatabase-plain colored"></i>
                </div>
                <div style={{ fontSize: '15px'}}>SQL</div>
              </div>
            </a>
            <a href="#" style={{ textAlign: 'center' }}>
              <div>
                <div style={{ paddingTop: '10px'}}>
                  <i class="devicon-oracle-original colored"></i>
                </div>
                <div style={{ fontSize: '15px'}}>Oracle</div>
              </div>
            </a>
        </div>
      </div>
    </section>
  );
}