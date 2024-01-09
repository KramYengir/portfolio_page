import { FaCheckCircle } from "react-icons/fa";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* ------ DESIGN ----- */}
        <article className="service">
          <div className="service__head">
            <h3>Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheckCircle className={"service__icon"} />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <FaCheckCircle className={"service__icon"} />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <FaCheckCircle className={"service__icon"} />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <FaCheckCircle className={"service__icon"} />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>

        {/* ------ WEB DEV ----- */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheckCircle className={"service__icon"} />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <FaCheckCircle className={"service__icon"} />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <FaCheckCircle className={"service__icon"} />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <FaCheckCircle className={"service__icon"} />
              <p>Lorem ipsum dolor sit amet.</p>
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
              <FaCheckCircle className={"service__icon"} />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <FaCheckCircle className={"service__icon"} />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <FaCheckCircle className={"service__icon"} />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <FaCheckCircle className={"service__icon"} />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
