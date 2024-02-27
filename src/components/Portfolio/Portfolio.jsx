import "./Portfolio.css";
import IMG1 from "../../assets/FH.jpg";
import IMG2 from "../../assets/weather.png";
import IMG3 from "../../assets/library.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Some of my Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__image">
            <img src={IMG1} alt="image of project" />
          </div>
          <h3>Ferryhill Fish & Chips</h3>
          <div className="portfolio__cta">
            <a href="" target="blank" className="btn">
              Github
            </a>
            <a
              href="https://ferryhillfishandchips.com/"
              target="blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__image">
            <img src={IMG2} alt="image of project" />
          </div>
          <h3>Weather App</h3>
          <div className="portfolio__cta">
            <a
              href="https://github.com/KramYengir/weather-app"
              target="blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://kramyengir.github.io/weather-app/"
              target="blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__image">
            <img src={IMG3} alt="image of project" />
          </div>
          <h3>Personal Library App</h3>
          <div className="portfolio__cta">
            <a
              href="https://github.com/KramYengir/library-app"
              target="blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://kramyengir.github.io/library-app/"
              target="blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
