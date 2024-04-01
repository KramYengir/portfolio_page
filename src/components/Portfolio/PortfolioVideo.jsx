/* eslint-disable react/prop-types */
const PortfolioVideo = ({ src, poster }) => {
  return (
    <video
      src={src}
      autoPlay
      loop
      muted
      preload="false"
      playsInline
      poster={poster}
    ></video>
  );
};

export default PortfolioVideo;
