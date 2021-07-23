import "./sections_Css/Projects.css";
import ExtensionIcon from "./sections_Css/ExtensionIcon.png";
import ComputerIcon from "@material-ui/icons/Computer";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import React, { useState, useRef, useEffect} from "react";


const Projects = (props) => {
    const [isExpanded, setExpanded] = useState(false);
    const expandDiv = () => {
        setExpanded(true);
    }



  return (
    <section className="projects_Section">
        <div className="projectsDiv">

      <div onClick={expandDiv} className={`${isExpanded ? 'expandedDiv' : 'normal'}`} >
        <div style={{ marginBottom: "4vw" }}>
          <img
            src={ExtensionIcon}
            style={{ width: "9vw", height: "auto" }}
          ></img>

          <h2>Easy</h2>
          <h2>Link</h2>
        </div>
      </div>
      <div id="pr">
        <div style={{ marginBottom: "4vw" }}>
          <ComputerIcon style={{ width: "9vw", height: "auto" }} />

          <h2>Class</h2>
          <h2>Note</h2>
          <h2>Sharing</h2>
        </div>
      </div>
      <div id="pr">
        <div style={{ marginBottom: "4vw" }}>
          <FileCopyIcon style={{ width: "9vw", height: "auto" }} />
          <h2>Catalog</h2>
          <h2>Generator</h2>
        </div>
      </div>
      <div id="pr">
        <div style={{ marginBottom: "4vw" }}>
          <h2>Pokemon</h2>
          <h2>Search</h2>
          <h2>with Qt C++</h2>
        </div>
      </div>
      </div>
    </section>
  );
};
export default Projects;
