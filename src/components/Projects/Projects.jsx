import React from "react";
import "./Projects.css";
import Fee from "../Images/3.mp4"

import Flixverse from "../Images/4.mp4"

import portfolio from "../Images/1.mp4"
import game from "../Images/6.mp4"
import city from "../Images/5.mp4"
import space from "../Images/2.mp4"

import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <h1 className="mywork">Projects</h1>

      <div className="kaam container">
        <div className="project card">
          <video Play controls={[]} src={portfolio} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Eternal Fighters </h5>
            <p className="card-text">
              Fast-paced, dynamic system with combo moves and character-specific special abilities  and includes characters from various anime fighting.
            </p>
            <Link to="https://github.com/Atharsidd21/Eternal-Fighters.git" target="Git1" className="View btn btn-primary">
              View Github
            </Link>


          </div>

        </div>
        <div className="project card">
          <video Play controls={[]} src={Flixverse} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Tactical Squad Shooter</h5>
            <p className="card-text">
              Developed a third-person tactical shooter level with squad commands and enemy AI during my internship at AJ Global Networks LLP.

            </p>
            <Link to="https://play.google.com/store/apps/details?id=com.anshjainglobalnetworksllp.tacticalsquadshooter" target="PlayStore" className="View btn btn-primary">
              Play Game
            </Link>

          </div>

        </div>
        <div className="project card">
          <video Play controls={[]} src={Fee} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Sundered Realms</h5>
            <p className="card-text">
              Built a Souls-like game with dynamic combat using Unreal Blueprints for logic, animations, and NPCs.
            </p>

            <Link to="https://github.com/Atharsidd21/Sundered-Realms.git" target="Git3" className="View btn btn-primary">
              View Github
            </Link>


          </div>

        </div>



      </div>

      <div className="kaam container 2">
        <div className="project card">
          <video Play controls={[]} src={game} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Village Days </h5>
            <p className="card-text">
              Village Days,a fun coin-collection game where villagers chase you out! Designed player dash, enemy AI, and particle effects using Blueprints.

            </p>
            <Link to="https://github.com/Atharsidd21/VillageGame.git" target="Git4" className="View btn btn-primary">
              View Github
            </Link>


          </div>

        </div>
        <div className="project card">
          <video Play controls={[]} src={city} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Rogue City</h5>
            <p className="card-text">
              Rogue City,a sandbox project with character movement, driving, and interaction systems. Built using Unreal Engine to explore open-world mechanics and urban level design.
            </p>
            <Link to="https://github.com/Atharsidd21/Rougue-City.git" target="Git 5" className="View btn btn-primary">
              View Github
            </Link>

          </div>

        </div>
        <div className="project card">
          <video Play controls={[]} src={space} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Space Siege</h5>
            <p className="card-text">
              Space Siege, a 2D space shooter game in Unity with C#. Features include enemy waves, power-ups, UI, animations, and VFX.</p>

            <Link to="https://github.com/Atharsidd21/Space-Siege.git" target="Git6" className="View btn btn-primary">
              View Github
            </Link>


          </div>

        </div>



      </div>
    </div>
  );
};

export default Projects;
