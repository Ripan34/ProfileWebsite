import "./sections_Css/Landing.css";
import pic from "./profile_Pic2.png";

import LinkedInIcon from "@material-ui/icons/LinkedIn"; //LinkedIn icon
import GitHubIcon from "@material-ui/icons/GitHub"; //GitHub Icon
import TwitterIcon from "@material-ui/icons/Twitter"; //Twitter Icon



const Landing = () => {
  return (
    <section className="landing_Section">
      <div className="nameDiv">

        <h2 style={{fontWeight:"bold", fontSize:"3.5vw"}}>Ripandeep Singh</h2>
        <p style={{ fontSize:"2vw"}}>Software Developer</p>
        </div>
  
    </section>
  );
};
export default Landing;
