import React from "react";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
            <h3>Hello, It's me</h3>
            <h1>Mario</h1>
            <h3>Mamma mia, and I'm a <span>Fontaner</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan ornare neque sit amet malesuada. Sed bibendum eleifend interdum. Suspendisse felis risus, facilisis quis dui at, tincidunt varius sem.</p>
            <div className="social-media">
                <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-twitch" aria-hidden="true"></i></a>
            </div>
            <a href="#" className="btn">Download resume</a>
        </div>
        <div className="about-img">
            <img src="https://toppng.com/uploads/preview/luffy-2nd-gear-one-piece-luffy-gear-second-11562941039pcqlhzgq9t.png" alt="hola" width="400px" height="400px"></img>
        </div>

    </section>
  );
}


