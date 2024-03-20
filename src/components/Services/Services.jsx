import { FaCheckCircle } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  return (
    <section id="services">
      <p className="sub-heading">What I Offer</p>
      <h2 className="heading">Services</h2>
      <div className="container services__container">
        {/* ------ DESIGN ----- */}
        <article className="service">
          <div className="service__head">
            <h3>Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheckCircle className={"service__icon"} aria-hidden={true} />
              <p>Wireframing & Prototyping</p>
            </li>
            <li>
              <FaCheckCircle className={"service__icon"} aria-hidden={true} />
              <p>Brand Identity </p>
            </li>
            <li>
              <FaCheckCircle className={"service__icon"} aria-hidden={true} />
              <p>UI/UX Style Guide</p>
            </li>
            <li>
              <FaCheckCircle className={"service__icon"} aria-hidden={true} />
              <p>Social Media Graphics</p>
            </li>
          </ul>
        </article>

        {/* ------ WEB DEV ----- */}
        <article className="service">
          <div className="service__head">
            <h3>Full Web Page</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheckCircle className={"service__icon"} aria-hidden={true} />
              <p>Bespoke Website Design</p>
            </li>
            <li>
              <FaCheckCircle className={"service__icon"} aria-hidden={true} />
              <p>Responsive Development</p>
            </li>
            <li>
              <FaCheckCircle className={"service__icon"} aria-hidden={true} />
              <p>Performance Optimization</p>
            </li>
            <li>
              <FaCheckCircle className={"service__icon"} aria-hidden={true} />
              <p>High Accessibility Standard</p>
            </li>
            <li>
              <FaCheckCircle className={"service__icon"} aria-hidden={true} />
              <p>Ongoing Maintenance & Support</p>
            </li>
          </ul>
        </article>

        {/* ------ ANALYSIS ----- */}
        <article className="service">
          <div className="service__head">
            <h3>Analysis</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheckCircle className={"service__icon"} aria-hidden={true} />
              <p>Basic SEO Assessment</p>
            </li>
            <li>
              <FaCheckCircle className={"service__icon"} aria-hidden={true} />
              <p>Usability Evaluation</p>
            </li>
            <li>
              <FaCheckCircle className={"service__icon"} aria-hidden={true} />
              <p>Performance Analysis</p>
            </li>
            <li>
              <FaCheckCircle className={"service__icon"} aria-hidden={true} />
              <p>Content Review</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
