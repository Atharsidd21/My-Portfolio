import React from "react";
import "./AboutMe.css";
import image from '../Images/code.png'

// import NavBar from "../Navbar/NavBar";



const AboutMe = () => {
  return (
    <div className="container-fluid">
      <h1 className="about">About Me</h1>
      <div className="text-section"> 
       <div className="paragraph">
            <p className="degree">
            Hello! I’m Athar Siddiqui, a recent B.Tech graduate in Computer Science and a dedicated game developer. 
            My journey in game development started with hands-on projects using both Unity and Unreal Engine, where I developed a 
            strong foundation in C#, C++, and Blueprint scripting. My portfolio showcases a range of games, from arcade shooters
             to fantasy-inspired worlds, where I’ve refined skills in gameplay programming, AI development, UI design, and visual effects
            </p>
            <p className="degree">
            Driven by a passion for creating immersive experiences, I continually seek new tools and techniques 
            to push the boundaries of game design. I’m excited to bring my creativity and technical skills to every project as
             I continue my journey in game development.
            </p>
            <p className="degree">
            I am excited about the prospect of leveraging my skills to contribute meaningfully
            to real-world projects and am actively seeking opportunities to embark on this journey.
            </p>
            
       </div>
      <img src={image} alt="ayush" className="boi"/>
        
        
      </div>
      
      
    </div>
  );
};

export default AboutMe;
