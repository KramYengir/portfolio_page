import "./Portfolio.css";
import ferryhillIMG from "../../assets/FH.jpg";
import weatherAppIMG from "../../assets/weather.png";
import spaceTourismIMG from "../../assets/space-tourism.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <p className="sub-heading">Some of my Work</p>
      <h2 className="heading">Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__image">
            <img src={ferryhillIMG} alt="image of project" />
            <h3>Ferryhill Fish & Chips</h3>
          </div>
          <div className="portfolio__cta">
            <a
              href="https://github.com/KramYengir/restaurant-page"
              target="blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://ferryhillfishandchips.com/"
              target="blank"
              className="btn btn-primary"
            >
              Live Page
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__image">
            <img src={spaceTourismIMG} alt="image of project" />
            <h3>Space Tourism</h3>
          </div>
          <div className="portfolio__cta">
            <a
              href="https://github.com/KramYengir/library-app"
              target="blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://rigneymade-space.netlify.app/"
              target="blank"
              className="btn btn-primary"
            >
              Live Page
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__image">
            <img src={weatherAppIMG} alt="image of project" />
            <h3>Weather App</h3>
          </div>
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
              Live Page
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
