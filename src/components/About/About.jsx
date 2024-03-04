import "./About.css";
import myImg from "../../assets/me_bw.png";
import { IoSchoolSharp } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <p className="sub-heading">Get To Know</p>
      <h2 className="heading">About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={myImg} alt="Image of page creator" />
        </div>
        <article className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <IoSchoolSharp className="about__icon" />
              <div>
                <h3>Education</h3>
                <small>B.Sc (Hons) Software Development</small>
                <br />
                <small>B.Eng Computer Engineering</small>
              </div>
            </div>
            <div className="about__card">
              <FaCamera className="about__icon" />
              <div>
                <h3>Hobby</h3>
                <small>Photography</small>
                <br />

                <small>Running</small>
              </div>
            </div>
            <div className="about__card">
              <MdLanguage className="about__icon" />
              <div>
                <h3>Other Experience</h3>
                <small>Certified TEFL Teacher</small>
                <br />
                <small>Figma - Photoshop</small>
              </div>
            </div>
          </div>
          <p className="ff-sans-cond fs-500">
            With a solid background in Software Development and a habit of
            crafting logos to full-blown websites for friends and family, I had
            an epiphany: why not turn my passion into a profession? Therefore,
            RigneyMade was born—a brand I aspire to make synonymous with quality
            in every project I undertake. Rooted in simplicity, reliability, and
            trust, RigneyMade represents my commitment to delivering seamless
            design and functional excellence in collaboration with my clients.
          </p>
          <a href="#contact" className="btn btn-primary">
            Get In Touch!
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
