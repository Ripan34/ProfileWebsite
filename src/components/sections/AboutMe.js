import './sections_Css/AboutMe.css';
import sjsuImage from "./sections_Css/sjsuImage.png";
import fresnoImage from "./sections_Css/fresnoImage.png";


const AboutMe = () => {
return(
    <section className="aboutMe_Section">
        <h1>About Me</h1>
        <p id="about"> An undergraduate computer science student at San Jose state university with an interest in software development. Seeking internship and job opportunities to apply my skills and experience assisting a company's needs by developing software applications.</p>
        <div className="school">
            <div className="schoolInfo">
            <img style={{width: "20vw"}} src={sjsuImage} alt="SJSU"></img>
                <h3>Bachelors in <br/> Computer Science</h3>
            </div>
            <div className="schoolInfo">
            <img style={{width: "20vw"}} src={fresnoImage} alt="Fresno City College"></img>
            <h3>Associates in <br/>Physics and Mathematics</h3>
            </div>
        </div>

    </section>
);
}
export default AboutMe;

//#531a18 