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
            <h3>Full Web Page</h3>
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
