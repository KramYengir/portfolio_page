import "./Experience.css";
import { TbBrandNextjs } from "react-icons/tb";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaReact,
  FaCogs,
  FaFigma,
} from "react-icons/fa";
import {
  SiSass,
  SiJest,
  SiAdobephotoshop,
  SiTailwindcss,
  SiTypescript,
  SiSanity,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { GiDeerHead } from "react-icons/gi";

const Experience = () => {
  return (
    <section id="experience">
      <p className="sub-heading">What I&apos;ve Learned</p>
      <h2 className="heading">My Experience</h2>
      <div className="container experience__container">
        <div className="experience__section">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <div className="experience__details">
              <FaHtml5 className="experience__icon" aria-hidden={true} />
              <p>HTML</p>
            </div>
            <div className="experience__details">
              <FaCss3Alt className="experience__icon" aria-hidden={true} />
              <p>CSS</p>
            </div>
            <div className="experience__details">
              <SiSass className="experience__icon" aria-hidden={true} />
              <p>Sass</p>
            </div>
            <div className="experience__details">
              <SiTailwindcss className="experience__icon" aria-hidden={true} />
              <p>Tailwind CSS</p>
            </div>
            <div className="experience__details">
              <IoLogoJavascript
                className="experience__icon"
                aria-hidden={true}
              />
              <p>Javascript</p>
            </div>
            <div className="experience__details">
              <SiTypescript className="experience__icon" aria-hidden={true} />
              <p>Typescript</p>
            </div>
            <div className="experience__details">
              <FaReact className="experience__icon" aria-hidden={true} />
              <p>React</p>
            </div>

            <div className="experience__details">
              <SiJest className="experience__icon" aria-hidden={true} />
              <p>Jest Testing</p>
            </div>
            <div className="experience__details">
              <GiDeerHead className="experience__icon" aria-hidden={true} />
              <p>The Odin Project</p>
            </div>
            <div className="experience__details">
              <FaFigma className="experience__icon" aria-hidden={true} />
              <p>Figma</p>
            </div>
            <div className="experience__details">
              <SiAdobephotoshop
                className="experience__icon"
                aria-hidden={true}
              />
              <p>Photoshop</p>
            </div>
          </div>
        </div>
        <div className="experience__section">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <div className="experience__details">
              <FaNodeJs className="experience__icon" aria-hidden={true} />
              <p>Node.js</p>
            </div>
            <div className="experience__details">
              <TbBrandNextjs className="experience__icon" aria-hidden={true} />
              <p>Next.js</p>
            </div>
            <div className="experience__details">
              <SiSanity className="experience__icon" aria-hidden={true} />
              <p>Sanity.io</p>
            </div>
            <div className="experience__details">
              <FaCogs className="experience__icon" aria-hidden={true} />
              <p>API (REST)</p>
            </div>
            <div className="experience__details">
              <FaGitAlt className="experience__icon" aria-hidden={true} />
              <p>GIT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
