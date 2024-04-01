/* eslint-disable react/prop-types */
import { Suspense, lazy } from "react";
const PortfolioVideo = lazy(() => import("./PortfolioVideo.jsx"));

export const PortfolioItem = ({
  mp4,
  img,
  imgAlt,
  title,
  info,
  techInfo,
  github,
  livePage,
}) => {
  // const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <article className="portfolio__item">
      <h3 className="fs-600 uppercase letter-spacing-3">{title}</h3>
      <div className="video-container">
        <Suspense
          fallback={<img src={img} alt={imgAlt} className="thumbnail" />}
        >
          <PortfolioVideo src={mp4} poster={img}></PortfolioVideo>
        </Suspense>
      </div>
      <p>{info}</p>
      <div className="tech-info">
        {techInfo.map((tech, id) => (
          <small key={id}>{tech}</small>
        ))}
      </div>
      <div className="portfolio__cta">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Github
        </a>
        <a
          href={livePage}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Live Page
        </a>
      </div>
    </article>
  );
};
