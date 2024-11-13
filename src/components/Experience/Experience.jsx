import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="timeline">
        <h1 className="heading">Experience</h1>
          
          <div className="outer">
          <div className="experience card">
              <div className="info">
                <h3 className="title">Navile Digital Access(May 2024-July 2024)</h3>
                <p>
                ● Summer Industrial Training in Game Development.
                <br/>
                ● Worked on various projects using Unity 
                </p>
              </div>
            </div>
            <div className="experience card">
              <div className="info">
                <h3 className="title">GauravGO Technologies,Odisha,India(October2024-November 2024)</h3>
                <p>
                ● Enrolled as a Game Dev Trainee.
                <br/>
                ● Wokred on a Zombie game during their Training program uisng Unreal Engine.
                </p>
              </div>
            </div>
            <div className="experience card">
              <div className="info">
                <h3 className="title">Ansh Jain Global Networks LLP
                (Current)</h3>
                <p>
                ● Wokring as a Unity Game Developer.
                <br/>
                ● My main task is to program mechanics for mobile games.
                </p>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
