import "./sections_Css/Landing.css";
import React from 'react';
import Slide from 'react-reveal/Slide';

const Landing = () => {
  return (
    <section className="landing_Section">
<ul>
  <li><a id="nameH1" href="/">Ripandeep Singh</a></li>
  <div style={{marginRight:"2vw"}}>
  <li><a style={{float:"right", color: "white"}} href="https://www.linkedin.com/in/ripandeep-singh/">LinkedIn</a></li>
  <li><a style={{float:"right", color: "white"}} href="https://github.com/Ripan34">GitHub</a></li>
  <li><a style={{float:"right", color: "white"}} href="https://twitter.com/Ripan_34">Twitter</a></li>
  <li><a style={{float:"right", color: "white"}} href="https://twitter.com/Ripan_34">Resume</a></li>
  </div>
</ul>
<Slide left>
        <div className="nameDiv">

        <h2 style={{fontWeight:"bold", fontSize:"3.5vw"}}>Ripandeep Singh</h2>
        <p style={{ fontSize:"2vw"}}>Software Developer</p>
        </div>
        </Slide>

        <svg class="arrows">
							<path class="a1" d="M0 0 L30 32 L60 0"></path>
							<path class="a2" d="M0 20 L30 52 L60 20"></path>
							<path class="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
    </section>
  );
};
export default Landing;
/* <li><a style={{float:"right", color: "white", backgroundColor: "#111", marginLeft: "1vw"}} href="https://www.linkedin.com/in/ripandeep-singh/">LinkedIn</a></li>
<li><a style={{float:"right", color: "white", backgroundColor: "#111", marginLeft: "1vw"}} href="https://github.com/Ripan34">GitHub</a></li>
<li><a style={{float:"right", color: "white", backgroundColor: "#111", marginLeft: "1vw"}} href="https://twitter.com/Ripan_34">Twitter</a></li> */