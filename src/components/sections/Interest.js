import "./sections_Css/Interest.css";
import soccer from "./soccer.png";
import volleyball from "./volleyball.png";
import telescope from "./telescope.png";
import hiking from "./hiking.png";
import books from "./books.png";
import physics from './physics.png';

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