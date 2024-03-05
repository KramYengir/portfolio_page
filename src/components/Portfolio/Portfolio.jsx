import "./Portfolio.css";
import { PortfolioItem } from "./PortfolioItem";

import ferryhillIMG from "../../assets/FH.jpg";
import weatherAppIMG from "../../assets/weather.png";
import spaceTourismIMG from "../../assets/space-tourism.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <p className="sub-heading">Some of my Work</p>
      <h2 className="heading">Portfolio</h2>
      <div className="container portfolio__container">
        <PortfolioItem
          img={ferryhillIMG}
          imgAlt={"Ferryhil Fish and Chips"}
          title={"Ferryhill Fish & Chips"}
          info={
            "For my first client, I developed a multi-page, streamlined website for a popular takeaway establishment in Manchester."
          }
          techInfo={"HTML, Sass, JS, Google Maps API"}
          github={"https://github.com/KramYengir/restaurant-page"}
          livePage={"https://ferryhillfishandchips.com/"}
        />
        <PortfolioItem
          img={spaceTourismIMG}
          imgAlt={"Space Tourism Page"}
          title={"Space Tourism"}
          info={
            "A React template for space tourism, demonstrating proficiency in design implementation and React."
          }
          techInfo={"HTML, CSS, React"}
          github={"https://github.com/KramYengir/FM-space-tourism"}
          livePage={"https://rigneymade-space.netlify.app/"}
        />
        <PortfolioItem
          img={weatherAppIMG}
          imgAlt={"Weather App Page"}
          title={"Weather App"}
          info={
            "A simple weather app, marking my first project employing Modular design and API calls."
          }
          techInfo={"HTML, Sass, JS, Webpack, API"}
          github={"https://github.com/KramYengir/weather-app"}
          livePage={"https://kramyengir.github.io/weather-app/"}
        />
      </div>
    </section>
  );
};

export default Portfolio;
