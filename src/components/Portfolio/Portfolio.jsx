import "./Portfolio.css";
import { PortfolioItem } from "./PortfolioItem";

import ferryhillMP4 from "../../assets/FH_video.mp4";
import spaceTourismMP4 from "../../assets/space_video.mp4";
import weatherMP4 from "../../assets/weather_video.mp4";
import reviewsMP4 from "../../assets/rreviews-video.mp4";
import ferryhillIMG from "../../assets/FH.png";
import weatherAppIMG from "../../assets/wedder.png";
import spaceTourismIMG from "../../assets/space.png";
import reviewsIMG from "../../assets/rreviews-image.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <p className="sub-heading">Some of my Work</p>
      <h2 className="heading">Portfolio</h2>
      <div className="container portfolio__container">
        <PortfolioItem
          mp4={reviewsMP4}
          img={reviewsIMG}
          imgAlt={"Rigney Reviews Website"}
          title={"RigneyReviews"}
          info={
            "A Next.js project leveraging Sanity.io Headless CMS, TypeScript, and TailwindCSS to build a statically generated review blog."
          }
          techInfo={[
            "HTML",
            "TailwindCSS",
            "React",
            "Next.js",
            "Typescript",
            "Sanity.io",
            "OMDb API",
          ]}
          github={"https://github.com/KramYengir/rigney-reviews"}
          livePage={"https://ferryhillfishandchips.com/"}
        />
        <PortfolioItem
          mp4={ferryhillMP4}
          img={ferryhillIMG}
          imgAlt={"Ferryhil Fish and Chips"}
          title={"Ferryhill Fish & Chips"}
          info={
            "For my first client, I developed a multi-page, streamlined website for a popular takeaway establishment in Manchester."
          }
          techInfo={["HTML", "Sass", "JS", "Google Maps API"]}
          github={"https://github.com/KramYengir/restaurant-page"}
          livePage={"https://rreviews.netlify.app/"}
        />
        <PortfolioItem
          mp4={spaceTourismMP4}
          img={spaceTourismIMG}
          imgAlt={"Space Tourism Page"}
          title={"Space Tourism"}
          info={
            "A React template for space tourism, demonstrating proficiency in design implementation and React."
          }
          techInfo={["HTML", "CSS", "React"]}
          github={"https://github.com/KramYengir/FM-space-tourism"}
          livePage={"https://rigneymade-space.netlify.app/"}
        />
        <PortfolioItem
          mp4={weatherMP4}
          img={weatherAppIMG}
          imgAlt={"Weather App Page"}
          title={"Weather App"}
          info={
            "A simple weather app, marking my first project employing Modular design and API calls."
          }
          techInfo={["HTML", "Sass", "JS", "Webpack", "API"]}
          github={"https://github.com/KramYengir/weather-app"}
          livePage={"https://kramyengir.github.io/weather-app/"}
        />
      </div>
    </section>
  );
};

export default Portfolio;
