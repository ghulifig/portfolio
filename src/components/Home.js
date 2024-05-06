import React from "react";
const batman = require.context('../../public/assets/images', true);
export default function Home() {
  return (
    <section class="home" id="home">
        <div class="home-content">
            <h3>Ghuliana Figueredo</h3>
            <h4>Web Developer</h4>
            <br/>
            <div style={{marginBottom:'-5px'}}>
              <img src={batman('./peeker_luffy.png')} alt="Python" style={{ maxWidth: '20%' }}/>
            </div>
            <div>
              <a href="https://www.mangago.me/read-manga/one_piece/mr/one-piece/1/" target="_blank" class="btn">Download resume</a>
            </div>
            
            
        </div>
        {/* <div class="home-img">
            <img src="https://toppng.com/uploads/preview/luffy-2nd-gear-one-piece-luffy-gear-second-11562941039pcqlhzgq9t.png" alt="hola" width="400px" height="400px"></img>
        </div> */}
    </section>
  );
}