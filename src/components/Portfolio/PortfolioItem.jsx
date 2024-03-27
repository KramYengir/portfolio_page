/* eslint-disable react/prop-types */
import { useState } from "react";

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
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <article className="portfolio__item">
      <div className="video-container">
        <video
          src={mp4}
          autoPlay
          loop
          muted
          onLoadedData={() => setVideoLoaded(true)}
          style={{ display: videoLoaded ? "block" : "none" }}
        ></video>
        <img
          src={img}
          alt={imgAlt}
          style={{ display: !videoLoaded ? "block" : "none" }}
          className="thumbnail"
        />
      </div>
      <h3 className="fs-600 letter-spacing-3">{title}</h3>
      <p>{info}</p>
      <p>{techInfo}</p>
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
