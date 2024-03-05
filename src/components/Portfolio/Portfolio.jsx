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
          info={"A website for a fish & chip shop in Manchester"}
          github={"https://github.com/KramYengir/restaurant-page"}
          livePage={"https://ferryhillfishandchips.com/"}
        />
        <PortfolioItem
          img={spaceTourismIMG}
          imgAlt={"Space Tourism Page"}
          title={"Space Tourism"}
          info={"A website template for a space tourism company"}
          github={"https://github.com/KramYengir/FM-space-tourism"}
          livePage={"https://rigneymade-space.netlify.app/"}
        />
        <PortfolioItem
          img={weatherAppIMG}
          imgAlt={"Weather App Page"}
          title={"Weather App"}
          info={
            "A simple weather app I made early in my learning - needs a overhaul!"
          }
          github={"https://github.com/KramYengir/weather-app"}
          livePage={"https://kramyengir.github.io/weather-app/"}
        />
      </div>
    </section>
  );
};

export default Portfolio;
