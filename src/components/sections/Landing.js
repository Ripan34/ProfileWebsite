import "./sections_Css/Landing.css";
import React, { useState } from 'react';
import Slide from 'react-reveal/Slide';
import MenuIcon from '@material-ui/icons/Menu';

const Landing = () => {
  const [className, setClassName] = useState(false);

  const menuHandler = () => {
    setClassName(!className);
    }
  //menu Handler
  return (
    <section className="landing_Section">

<div class={className ? "topnav responsive": "topnav"} id="myTopnav">
  <a class="active" id="initials" href="/">RS</a>

  <a href="https://twitter.com/Ripan_34">Resume</a>
  <a href="https://www.linkedin.com/in/ripandeep-singh/">LinkedIn</a>
  <a href="https://github.com/Ripan34">GitHub</a>
  <a href="https://twitter.com/Ripan_34">Twitter</a>

  <a href="javascript:void(0)" class="icon" onClick={menuHandler}>
    <MenuIcon fontSize={"large"}></MenuIcon></a>
</div>


<Slide left>
        <div className="nameDiv">
        <h2>Ripandeep Singh</h2>
        <p>Software Developer</p>
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
{/* <div class={className ? "topnav responsive": "topnav"} id="myTopnav">
  <div style={{marginTop: "0.5vw"}}>
  <a class="active" href="/">RS</a>
  <a id="links" href="https://twitter.com/Ripan_34">Resume</a>
  <a id="links" href="https://www.linkedin.com/in/ripandeep-singh/">LinkedIn</a>
  <a id="links" href="https://github.com/Ripan34">GitHub</a>
  <a id="links" href="https://twitter.com/Ripan_34">Twitter</a>
  <a href="javascript:void(0)" class="icon" onClick={menuHandler}>
    <MenuIcon fontSize={"large"}></MenuIcon></a>
  </div>
</div> */}
// float: left;
// margin-left: 2vw;
// font-size: 2.5vw;
// font-family: "Kaushan Script", cursive;
// position: fixed;
// color: white;
// background-color: #ddd;
// color: black;