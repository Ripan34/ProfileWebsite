import './sections_Css/AboutMe.css';

const AboutMe = () => {
return(
    <section className="aboutMe_Section">
        <div className="grid">
        <div className="grid-item1">
        <h3>Background</h3>
            </div>
        <div className="grid-item2">
        <h3>School</h3>
        <p>Bachelor’s in Computer Science | San Jose State University, San Jose, CA | Anticipated - Dec 2021 </p>
        <h4>Associate of Science in Physics| Fresno City College, Fresno, CA | Graduated – June 2019</h4>
        <h4>Associate of Science in Mathematics | Fresno City College, Fresno, CA | Graduated – June 2019</h4> 
        </div>
        <div className="grid-item3">
            <h3>Interests</h3>
            </div>  
        <div className="grid-item4"> <h3>Acheivements</h3></div>
        </div>
    </section>
);
}
export default AboutMe;