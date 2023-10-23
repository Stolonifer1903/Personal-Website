import React from "react";
import "./Skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
        placerat elit, sed pulvinar sem imperdiet et. Duis tincidunt, odio eget
        convallis cursus.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <div>
            <img src={UIDesign} alt="ui design" className="skillBarImg" />
            <h2>UI Design</h2>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            libero odio, efficitur non pretium nec, dictum sit amet mauris. Sed.
          </p>
        </div>
        <div className="skillBar">
          <div>
            <img src={AppDesign} alt="app design" className="skillBarImg" />
            <h2>App Design</h2>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            libero odio, efficitur non pretium nec, dictum sit amet mauris. Sed.
          </p>
        </div>
        <div className="skillBar">
          <div>
            <img src={WebDesign} alt="web design" className="skillBarImg" />
            <h2>Web Design</h2>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            libero odio, efficitur non pretium nec, dictum sit amet mauris. Sed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
