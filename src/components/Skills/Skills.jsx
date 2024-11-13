import React from "react";
import "./Skills.css";
export default function Skills() {
  return (
    <div>
      <h1 className="skills">Skills</h1>
      <div class="skills-section">
        <div class="skills-container">
          <div class="skills-box">
            <div class="skills-title">
              <div class="skills-img">
                <img
                  src="https://img.icons8.com/color/512/unity.png"
                  alt=""
                  class="skills-icons"
                  style={{height:"70px",width:"70px"}}
                 
                />
              </div>
              <h3 className="language" >Unity Engine</h3>
            </div>
          </div>

          <div class="skills-box">
            <div class="skills-title">
              <div class="skills-img">
                <img
                  src="https://download.logo.wine/logo/Unreal_Engine/Unreal_Engine-Logo.wine.png"
                  alt=""
                  class="skills-icons"
                  style={{height:"80px",width:"800px"}}
                />
              </div>
              <h3 className="language">UnrealEngine</h3>
            </div>
          </div>

          <div class="skills-box">
            <div class="skills-title">
              <div class="skills-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJxI-CPJeMM6OzwxHe2ZzIHg2qX1P-JTMRFw&s"
                  alt=""
                  class="skills-icons"
                />
              </div>
              <h3 className="language">C++</h3>
            </div>
          </div>

          <div class="skills-box">
            <div class="skills-title">
              <div class="skills-img">
                <img
                  src="https://static.cdnlogo.com/logos/c/68/c-sharp-800x800.png"
                  alt=""
                  class="skills-icons"
                  style={{height:"55px"}}
                />
              </div>
              <h3 className="language">C#</h3>
            </div>
          </div>

          

          <div class="skills-box">
            <div class="skills-title">
              <div class="skills-img">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt=""
                  class="skills-icons"
                />
              </div>
              <h3 className="language">GitHub</h3>
            </div>
          </div>
        </div>
      

          

          

          

          

         
        
      </div>
    </div>
  );
}
