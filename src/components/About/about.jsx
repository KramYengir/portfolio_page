import "./about.css";
import myImg from "../../assets/me.jpg";
import { IoSchoolSharp } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={myImg} alt="Image of page creator" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <IoSchoolSharp className="about__icon" />
              <div>
                <h5>Education</h5>
                <small>B.Sc (Hons) Software Development</small>
                <br />
                <small>B.Eng Computer Engineering</small>
              </div>
            </article>
            <article className="about__card">
              <FaCamera className="about__icon" />
              <div>
                <h5>Hobby</h5>
                <small>15+ Years Photography Experience</small>
              </div>
            </article>
            <article className="about__card">
              <MdLanguage className="about__icon" />
              <div>
                <h5>Other Experience</h5>
                <small>Certified TEFL Teacher</small>
              </div>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            repellat qui iure exercitationem! Vel itaque , voluptatem ipsam
            corporis perferendis soluta velit in. Sapiente quam fuga ipsa et
            ratione adipisci libero ex vitae, consequuntur quo?
          </p>
          <a href="#contact" className="btn btn-primary">
            Get In Touch!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
