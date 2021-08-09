import "./sections_Css/Interest.css";
import soccer from "./pictures/soccer.png";
import volleyball from "./pictures/volleyball.png";
import telescope from "./pictures/telescope.png";
import hiking from "./pictures/hiking.png";
import books from "./pictures/books.png";
import ranjit from "./pictures/ranjitSingh.jpeg";
import uni from "./pictures/uni.jpeg";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Interest = () => {

    return(
        <section className="interestSection">
            <h1>Interests</h1>
            <div className="popup" style={{float: "right"}}>
            <Popup trigger={<button className="popup"> Books I am currently reading </button>} modal>
        <div style={{display: "flex", justifyContent: "center"}}>
            <img style={{width: "22em", marginRight: "4vw"}} src={ranjit} alt="ranjit"></img>
            <img style={{width: "23em"}} src={uni} alt={"universe"}></img>

        </div>
        </Popup>
        </div>
            <div className="wrapper"> 
                <img id="pics" src={telescope} alt="Telescope"></img>
                <img id="pics" src={books} alt="Books"></img>
                <img id="pics" src={volleyball} alt="Volleyball"></img>
                <img id="pics" src={soccer} alt="Soccer"></img>
                <img id="pics" src={hiking} alt="Hiking"></img>
            </div>
        </section>
    );
}
export default Interest;