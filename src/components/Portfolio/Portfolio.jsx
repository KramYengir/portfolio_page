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
          github={"https://github.com/KramYengir/restaurant-page"}
          livePage={"https://ferryhillfishandchips.com/"}
        />
        <PortfolioItem
          img={spaceTourismIMG}
          imgAlt={"Space Tourism Page"}
          title={"Space Tourism"}
          github={"https://github.com/KramYengir/FM-space-tourism"}
          livePage={"https://rigneymade-space.netlify.app/"}
        />
        <PortfolioItem
          img={weatherAppIMG}
          imgAlt={"Weather App Page"}
          title={"Weather App"}
          github={"https://github.com/KramYengir/weather-app"}
          livePage={"https://kramyengir.github.io/weather-app/"}
        />
      </div>
    </section>
  );
};

export default Portfolio;
