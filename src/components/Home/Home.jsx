import React from "react";
import image from "../Images/profile-pic (4).png";
import "./Home.css";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="landing container-fluid" >
      <div className="home-page">
        <div className="home">
        <h1>
          <span className="ayush">Athar Siddiqui</span>
        </h1>
        <div className="text" style={{color:"white"}}>
          <Typewriter 
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "I'm a Game developer",
                "I'm an Unity developer",
                "I'm an Unreal developer",
                "I'm a Programmer",
                
              ],
            }}
          />
        </div>
        <p className="description" style={{color:"white"}}>
        Hi, I’m a passionate game developer with a love for coding, gaming, and traveling. Throughout my learning journey, I have honed my skills in Unity, Unreal Engine, C#, and C++. My primary focus lies in developing innovative and engaging games, and I'm always eager to explore new techniques and technologies within the game development industry. I am constantly learning to refine my craft, experimenting with different game mechanics, and staying updated on industry trends. My ultimate dream is to be part of a AAA game project, like Grand Theft Auto, where I can contribute to creating immersive, high-quality experiences for players.
        </p>
        <button className="btn btn-success use" type="button">
          <Link
            className="resume"
            to="https://drive.google.com/file/d/1wp5JAJIlxythLLL0bD-7BI9RLMTiEOYC/view?usp=sharing"
            style={{color:"white",textDecoration:"none"}}
            target="Resume"
          >
            My Resume
          </Link>
        </button>
        </div>
        <img className="fix"style={{height:400}} src={image} alt="ayush" />
      </div>
      
      
      
      
    </div>
  );
};

export default Home;
