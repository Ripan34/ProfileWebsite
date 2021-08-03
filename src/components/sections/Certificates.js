import './sections_Css/Certificates.css'
import cr1 from "./pictures/cr1.png";
import cr2 from "./pictures/cr2.png";
import cr3 from "./pictures/cr3.png";
import cr4 from "./pictures/cr4.png";
import cr5 from "./pictures/cr5.png";

const Certficates = () => {

    return (<section className="certificates_Section">
        <h1>Certificates</h1>
        <div className="allCert">
            <div className="certs">
                <img src={cr1} alt="cr1"></img>
                <p>Automating Real-World Tasks with Python</p>
            </div>
            <div className="certsRev">
                <img src={cr2} alt="cr2"></img>
                <p>Configuration Management and the Cloud</p>
            </div>
            <div className="certs">
                <img src={cr3} alt="cr3"></img>
                <p>Using Python to Interact with the Operating System</p>
            </div>
            <div className="certsRev">
                <img src={cr4} alt="cr4"></img>
                <p>Troubleshooting and Debugging Techniques</p>
            </div>
        </div>
    </section>);
    
}
export default Certficates;