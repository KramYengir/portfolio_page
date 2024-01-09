import "./experience.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaReact,
  FaCogs,
} from "react-icons/fa";
import { SiSass, SiJest } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { GiDeerHead } from "react-icons/gi";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaHtml5 className="experience__icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <FaCss3Alt className="experience__icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <SiSass className="experience__icon" />
              <h4>Sass</h4>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className="experience__icon" />
              <h4>Javascript</h4>
            </article>
            <article className="experience__details">
              <FaReact className="experience__icon" />
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <FaNodeJs className="experience__icon" />
              <h4>Node.js</h4>
            </article>
            <article className="experience__details">
              <FaCogs className="experience__icon" />
              <h4>API (REST)</h4>
            </article>
            <article className="experience__details">
              <FaGitAlt className="experience__icon" />
              <h4>GIT</h4>
            </article>
            <article className="experience__details">
              <SiJest className="experience__icon" />
              <h4>Jest Testing</h4>
            </article>
            <article className="experience__details">
              <GiDeerHead className="experience__icon" />
              <h4>The Odin Project</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
