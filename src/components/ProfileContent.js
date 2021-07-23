import AboutMe from './sections/AboutMe'; //About me
import Landing from './sections/Landing'; //Landing
import Projects from './sections/Projects'; //Projects
import Certficates from './sections/Certificates'; //Certificates
import Resume from './sections/Resume'; //Resume
import ContactMe from './sections/ContactMe'; //Resume


const ProfileContent = () => {

return (
    <div>
        <Landing/>
        <AboutMe/>
        <Projects/>
        <Certficates/>
        <Resume/>
        <ContactMe/>
    </div>
);
}
export default ProfileContent;