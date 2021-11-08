import "./sections_Css/Skills.css";
import mongo from "./pictures/mongo.png";
import linux from "./pictures/linux.png";
import nodejs from "./pictures/nodejs.png";
import scala from "./pictures/scala.png";
import ExpressJS from "./pictures/ExpressJS.png";

const Skills = () => {
    return (
        <section className="skillsSection">
            <h1 style={{fontSize: "3vw", marginTop: "5vw"}}>Coding Skills</h1>
            <div className="chart">
            <article className="canvas-container">
            </article>
            
            <div className="otherSkills"> 
                <div className="pics">
                <img  id="pic" src={linux} alt="linux"></img>
                <img  id="pic" style={{width: "16vw", height: "auto"}} src={mongo} alt="mongo"></img>
                <img  id="pic" src={nodejs} alt="nodejs"></img>
                <img  id="pic" src={ExpressJS} alt="Express"></img>
                <img  id="pic" style={{width: "16vw", height: "auto"}} src={scala} alt="scala"></img>
            </div>
            </div>
            </div>
        </section>
    );
}
export default Skills;