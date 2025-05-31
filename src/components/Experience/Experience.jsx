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
                <h3 className="title">GauravGO Technologies,Odisha,India(October2024-November 2024)</h3>
                <p>
                  ● Completed extensive training on Unreal Engine with a focus on Blueprints and C++.
                  <br />
                  ● Wokred on a various games during their Training program uisng Unreal Engine.
                  <br />
                  ● Built gameplay mechanics and small prototypes to reinforce core game development concepts.
                  <br />
                  ● Gained hands-on experience in level design, AI behavior, and dynamic event scripting.
                  <br />
                  ● Worked on optimizing environments and interactions within Unreal’s visual scripting system.
                  <br />
                  ● Participated in debugging and testing processes to ensure smooth user experience.

                </p>
              </div>
            </div>
            <div className="experience card">
              <div className="info">
                <h3 className="title">Ansh Jain Global Networks LLP
                  (November 2024 - February 2025)</h3>
                <p>
                   ● Contributed to multiple mobile game projects using Unity and C#. 
                  <br />
                  ● Implemented core gameplay features, UI/UX elements, and interactive mechanics. 
                  <br />
                  ● Collaborated with a team of developers and artists to optimize performance for Android builds 
                  <br />
                  ● Participated in debugging and testing processes to ensure smooth user experience. 
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
