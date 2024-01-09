import "./portfolio.css";
import IMG1 from "../../assets/me.jpg";

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
          <h3>Porfolio Item</h3>
          <div className="portfolio__cta">
            <a href="" target="blank" className="btn">
              Github
            </a>
            <a href="" target="blank" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__image">
            <img src={IMG1} alt="image of project" />
          </div>
          <h3>Porfolio Item</h3>
          <div className="portfolio__cta">
            <a href="" target="blank" className="btn">
              Github
            </a>
            <a href="" target="blank" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__image">
            <img src={IMG1} alt="image of project" />
          </div>
          <h3>Porfolio Item</h3>
          <div className="portfolio__cta">
            <a href="" target="blank" className="btn">
              Github
            </a>
            <a href="" target="blank" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
