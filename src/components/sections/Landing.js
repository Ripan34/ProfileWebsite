import "./sections_Css/Landing.css";
import React, { useState } from 'react';
import Slide from 'react-reveal/Slide';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
let menuIcon = <MenuIcon fontSize={"large"}/>;

const Landing = () => {
  const [className, setClassName] = useState(false);
  const menuHandler = (e) => {
    e.preventDefault();
    setClassName(!className);
    if(className)
      menuIcon = <MenuIcon fontSize={"large"}/>;
      else
      menuIcon = <MenuOpenIcon fontSize={"large"}/>;
    }
  //menu Handler
  return (
    <section className="landing_Section">

<div class={className ? "topnav responsive": "topnav"} id="myTopnav">
  <a class="active" id="initials" href="/">RS</a>
  <a href="https://twitter.com/Ripan_34">Twitter</a>
  <a href="https://www.linkedin.com/in/ripandeep-singh/">LinkedIn</a>
  <a href="https://github.com/Ripan34">GitHub</a>
  <a href="https://drive.google.com/file/d/1VqUEfmapK5K2J1kgVu_aDuZw1JALoIsj/view?usp=sharing">Resume</a>


  <a href="/" class="icon" onClick={menuHandler}>
    {menuIcon}</a>
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
