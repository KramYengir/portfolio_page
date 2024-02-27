import "./Experience.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaReact,
  FaCogs,
  FaFigma,
} from "react-icons/fa";
import { SiSass, SiJest, SiAdobephotoshop } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { GiDeerHead } from "react-icons/gi";

const Experience = () => {
  return (
    <section id="experience">
      <p className="sub-heading">My Skills</p>
      <h2 className="heading">My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <div className="experience__details">
              <FaHtml5 className="experience__icon" />
              <p>HTML</p>
            </div>
            <div className="experience__details">
              <FaCss3Alt className="experience__icon" />
              <p>CSS</p>
            </div>
            <div className="experience__details">
              <SiSass className="experience__icon" />
              <p>Sass</p>
            </div>
            <div className="experience__details">
              <IoLogoJavascript className="experience__icon" />
              <p>Javascript</p>
            </div>
            <div className="experience__details">
              <FaReact className="experience__icon" />
              <p>React</p>
            </div>
            <div className="experience__details">
              <FaNodeJs className="experience__icon" />
              <p>Node.js</p>
            </div>
            <div className="experience__details">
              <FaCogs className="experience__icon" />
              <p>API (REST)</p>
            </div>
            <div className="experience__details">
              <FaGitAlt className="experience__icon" />
              <p>GIT</p>
            </div>
            <div className="experience__details">
              <SiJest className="experience__icon" />
              <p>Jest Testing</p>
            </div>
            <div className="experience__details">
              <GiDeerHead className="experience__icon" />
              <p>The Odin Project</p>
            </div>
            <div className="experience__details">
              <FaFigma className="experience__icon" />
              <p>Figma</p>
            </div>
            <div className="experience__details">
              <SiAdobephotoshop className="experience__icon" />
              <p>Photoshop</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
