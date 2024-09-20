import React from "react";
const batman = require.context('../../public/assets/images', true);
export default function Home() {
  return (
    <section class="home" id="home">
        <div class="home-content">
          <div style={{ display: 'flex', width: '100%' }}>
            <div style={{ width: '50%' }}>
              <h3>Ghuliana Figueredo</h3>
              <h4>Web Developer</h4>
              <br/>
              <div className="about_me" id="about_me">
                I’m a full stack developer with over two years of experience in developing web applications.<br/><br/>
                My approach focuses on creating digital experiences that are fast, accessible, visually appealing, and responsive, while integrating tools and practices that optimize the efficiency and scalability of the projects I work on.
              </div>
            </div>
            <div style={{ width: '50%' }}>
              <div className="luffy" id="luffy">
                <img src={batman('./peeker_luffy2.png')} alt="Monkey D. Luffy" style={{ maxWidth: '40%' }} />
              </div>
              <div className="resume">
                <a href="https://www.mangago.me/read-manga/one_piece/mr/one-piece/1/" style={{ width: '40%' }} target="_blank" className="btn-resume">Download resume</a>
              </div>
            </div>
            {/* <button class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">ola
              </button> */}
          </div>
        </div>
        {/* <div class="home-img">
            <img src="https://toppng.com/uploads/preview/luffy-2nd-gear-one-piece-luffy-gear-second-11562941039pcqlhzgq9t.png" alt="hola" width="400px" height="400px"></img>
        </div> */}
    </section>
  );
}