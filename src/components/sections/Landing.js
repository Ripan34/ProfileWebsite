import "./sections_Css/Landing.css";
import React from 'react';
import Slide from 'react-reveal/Slide';

const Landing = () => {
  return (
    <section className="landing_Section">

<ul class="topnav">
<li><a id="nameH1" href="/">Ripandeep Singh</a></li>
  <div style={{marginRight:"3vw", marginTop: "8px"}}>
  <li style={{float:"right", color: "white"}}><a id="links" href="https://www.linkedin.com/in/ripandeep-singh/">LinkedIn</a></li>
  <li style={{float:"right", color: "white"}}><a id="links" href="https://github.com/Ripan34">GitHub</a></li>
  <li style={{float:"right", color: "white"}}><a id="links" href="https://twitter.com/Ripan_34">Twitter</a></li>
  <li style={{float:"right", color: "white"}}><a id="links" href="https://twitter.com/Ripan_34">Resume</a></li>
  </div>
</ul>
<div className="centerName">
<Slide left>
        <div className="nameDiv">

        <h2 style={{fontWeight:"bold", fontSize:"3.5vw"}}>Ripandeep Singh</h2>
        <p style={{ fontSize:"2vw"}}>Software Developer</p>
        </div>
        </Slide>
</div>
        <svg class="arrows">
							<path class="a1" d="M0 0 L30 32 L60 0"></path>
							<path class="a2" d="M0 20 L30 52 L60 20"></path>
							<path class="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
    </section>
  );
};
export default Landing;
