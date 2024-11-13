import React from "react";
import "./Projects.css";
import Fee from "../Images/3.mp4"

import Flixverse from "../Images/2.mp4"

import portfolio from "../Images/1.mp4"
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <h1 className="mywork">Projects</h1>

      <div className="kaam container">
        <div className="project card">
          <video Play controls={[]} src={portfolio} className="card-img-top" alt="..."  />
          <div className="card-body">
            <h5 className="card-title">Eternal Fighters </h5>
            <p className="card-text">
            ● Fast-paced, dynamic system with combo moves and character-specific special abilities.
            <br/>
            ●Characters from various anime fighting. 
              </p>
            <Link to="https://github.com/Atharsidd21/Eternal-Fighters.git" target="Git1" className="View btn btn-primary">
              View Github
            </Link>
            
           
          </div>
          
        </div>
        <div className="project card">
        <video Play controls={[]} src={Flixverse} className="card-img-top" alt="..."  />
          <div className="card-body">
            <h5 className="card-title">Space Siege</h5>
            <p className="card-text">
            ● Designed gameplay mechanics
            <br/>
            ● Developed enemy AI
            <br/>
            ● Added features like Health and HighScore
            </p>
            <Link to="https://github.com/Atharsidd21/Space-Siege.git" target="Git2" className="View btn btn-primary">
              View Github
            </Link>
           
          </div>
          
        </div>
        
        <div className="project card">
        <video Play controls={[]} src={Fee} className="card-img-top" alt="..."  />
          <div className="card-body" style={{height:500}}>
            <h5 className="card-title">Sundered Realms</h5>
            <p className="card-text">
            ● Immersive lore and engaging gameplay element and combat mechanics
           <br/>
           ● Showcases skills in designing gameplay
            </p>

            <Link to="https://github.com/Atharsidd21/Sundered-Realms.git" target="Git3" className="View btn btn-primary">
              View Github
            </Link>
            
          </div>
          
        </div>
        
        
      </div>
      
      
    </div>
  );
};

export default Projects;
