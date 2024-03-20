import "./About.css";
import myImg from "../../assets/me_bw.png";
import { IoSchoolSharp } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <p className="sub-heading">Get To Know</p>
      <h2 className="heading">About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={myImg} alt="page creator" />
        </div>
        <article className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <IoSchoolSharp className="about__icon" aria-hidden={true} />
              <div>
                <h3>Education</h3>
                <small>B.Sc (Hons) Software Development</small>
                <br />
                <small>B.Eng Computer Engineering</small>
              </div>
            </div>
            {/* <div className="about__card">
              <FaCamera className="about__icon" aria-hidden={true} />
              <div>
                <h3>Hobby</h3>
                <small>Reading</small>
                <br />

                <small>Running</small>
              </div>
            </div> */}
            <div className="about__card">
              <FaRegLightbulb className="about__icon" aria-hidden={true} />
              <div>
                <h3>Other Experience</h3>
                <small>Certified TEFL Teacher</small>
                <br />
                <small>Photography</small>
              </div>
            </div>
          </div>
          <p className="ff-sans-cond fs-500">
            Having always been the go-to guy for family and friends seeking
            digital assistance, I had an idea: &apos;Why not turn this passion
            into a profession?&apos; And so, RigneyMade was born – a name I
            aspire to see as a mark of quality at the bottom of effective web
            pages. With a personal touch and a no-nonsense approach, I&apos;m
            here to lend a helping hand to new and small businesses, guiding
            them every step of the way in establishing their online presence and
            attracting new customers.
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
