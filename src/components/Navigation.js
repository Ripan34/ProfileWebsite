import './Navigation.css'
import React, { useEffect, useState, useRef } from 'react';
import sig from './sections/signature.png';
import useWindowDimensions from "./sections/UseWindowDimensions";



const Navigation = (props) => {
  
const [offset, setOffset] = useState(0); //to get scroll effect
const { height, width } = useWindowDimensions();
console.log(height);


let totalOffset = 0;

 useEffect(() => {
   window.onscroll = () => {
     setOffset(window.pageYOffset)
     totalOffset = height + offset;
   }
 }, []);
let sigPic = <img onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} style={{width:"20vw", height:"auto", marginTop: "1vw", marginLeft: "1vw", marginBottom: "2vw", backgroundColor: "white"}}src={sig} alt="Profile"></img>;
let aboutM = <h3 onClick={() => window.scrollTo({top: height, left: 0, behavior: 'smooth'})} className="initial_heading">About Me</h3>; //about me
let projects = <h3 onClick={() => window.scrollTo({top: height*2, left: 0, behavior: 'smooth'})} className="initial_heading">Projects</h3>; 
let certficates = <h3 onClick={() => window.scrollTo({top: (height*3)+50, left: 0, behavior: 'smooth'})} className="initial_heading">Certficates</h3>;
let resume = <h3 onClick={() => window.scrollTo({top: height*4, left: 0, behavior: 'smooth'})} className="initial_heading">Resume</h3>;
let expertise = <h3 onClick={() => window.scrollTo({top: height*5, left: 0, behavior: 'smooth'})} className="initial_heading">Expertise</h3>;
let flag = true;


 if(offset > height && offset < height*2){
    aboutM = <h3 className="after_heading">About Me</h3>;
    flag = false;
 }
if(offset >= (height*2) && offset < height*3){
  projects = <h3 className="after_heading">Projects</h3>;
  flag = false;
}
 if(offset >= height*3 && offset < height*4){
  certficates = <h3 className="after_heading">Certficates</h3>;
  flag = false;

}
 if(offset >= height*4 && offset < height*5){
  resume = <h3 className="after_heading">Resume</h3>;
  flag = false;

}
if(offset > height*5){
  expertise = <h3 className="after_heading">Expertise</h3>;
  flag = false;

}
return (
    <div className={`${flag ? "navigationDivUpdated" : "navigationDiv"}`}>
      <div className="sig_pic_div">
        {sigPic}
        </div>
        <div className="sections_nav">
        {aboutM}
       {projects}
       {certficates}
       {resume}
       {expertise}
       </div>
      
    </div>
);
}
export default Navigation;