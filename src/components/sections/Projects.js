import "./sections_Css/Projects.css";
import ExtensionIcon from "./sections_Css/ExtensionIcon.png";
import noteSharing from './pictures/noteSharing.png';
import React from "react";

const Projects = (props) => {

  return (
    <section className="projects_Section">
      <h1 style={{ fontSize: "3vw" }}>Projects</h1>
      <h1 className="projectEq">
          myProjects = <br /> [ new{" "}
        </h1>
      <div className="allProjects">
        <div className="easyLink">
          <h3
            style={{
              fontFamily: "Tinos, serif",
              fontSize: "6vw",
              marginRight: "2vw",
            }}
          >
            (
          </h3>
          <img style={{ width: "13vw" }} src={ExtensionIcon} alt="Extension"></img>A published
          google chrome extension to add, and access class zoom sessions using
          JavaScript and jQuery.
          <h3 style={{ fontFamily: "Tinos, serif", fontSize: "6vw" }}>),</h3>
        </div>
        <div className="easyLink">
          <h3
            style={{
              fontFamily: "Tinos, serif",
              fontSize: "6vw",
              marginRight: "2vw",
            }}
          >
            <span style={{fontSize: "1.5vw"}}>new</span>(
          </h3>
          <img style={{ width: "17vw", height: "auto" }} src={noteSharing} alt="Note Sharing"></img> A web application to share and browse notes 
          among all students in a class for easy note taking. Embedded JavaScript, AJAX, HTML/CSS and Bootstrap.
          <h3 style={{ fontFamily: "Tinos, serif", fontSize: "6vw" }}>),</h3>
        </div>

        <div className="easyLink">
          <h3
            style={{
              fontFamily: "Tinos, serif",
              fontSize: "6vw",
              marginRight: "2vw",
            }}
          >
           <span style={{fontSize: "1.5vw"}}>new</span>(
          </h3>
          <img style={{ width: "13vw" }} src={ExtensionIcon} alt="thirdProject"></img>A published
          google chrome extension to add, and access class zoom sessions using
          JavaScript and jQuery.
          <h3 style={{ fontFamily: "Tinos, serif", fontSize: "6vw" }}>)];</h3>
        </div>

      </div>
    </section>
  );
};
export default Projects;
