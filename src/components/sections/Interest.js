import "./sections_Css/Interest.css";
import soccer from "./pictures/soccer.png";
import volleyball from "./pictures/volleyball.png";
import telescope from "./pictures/telescope.png";
import hiking from "./pictures/hiking.png";
import books from "./pictures/books.png";
import physics from './pictures/physics.png';

const Interest = () => {
    return(
        <section className="interestSection">
            <h1 style={{ fontSize: "3vw" }}>Interests</h1>
            <div className="wrapper"> 
                <img id="pics" src={telescope} alt="Telescope"></img>
                <img id="pics" src={books} alt="Books"></img>
                <img id="pics" src={volleyball} alt="Volleyball"></img>

                <img id="pics" src={soccer} alt="Soccer"></img>
                <img style={{width: "12vw", height: "auto"}}src={physics} alt="Physics"></img>
                <img id="pics" src={hiking} alt="Hiking"></img>
            </div>
        </section>
    );
}
export default Interest;