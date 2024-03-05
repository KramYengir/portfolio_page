import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

export const PortfolioItem = ({ img, imgAlt, title, github, livePage }) => {
  const [isInfoShown, setIsInfoShown] = useState(false);

  return (
    <article className="portfolio__item">
      <button
        className="info-button"
        onClick={() => setIsInfoShown(!isInfoShown)}
      >
        {isInfoShown ? <IoCloseSharp /> : <FaInfoCircle />}
      </button>
      <div className="portfolio__image">
        <img src={img} alt={imgAlt} />
        <h3>{title}</h3>
      </div>
      <div className="portfolio__cta">
        <a href={github} target="blank" className="btn">
          Github
        </a>
        <a href={livePage} target="blank" className="btn btn-primary">
          Live Page
        </a>
      </div>
    </article>
  );
};
