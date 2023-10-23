import React from "react";
import "./About.css";
import { Link } from "react-scroll";
import bg from "../../assets/portrait.png";
import hireMe from "../../assets/hireme.png";

const About = () => {
  return (
    <section id="about">
      <div className="aboutContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Shrey</span>
          <br />
          Web Developer
        </span>
        <p className="introPara">
          I am a skilled Full-stack developer with experience in MERN stack.
        </p>
        <Link>
          <button className="hireBtn">
            <img src={hireMe} alt="" className="hireImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default About;
