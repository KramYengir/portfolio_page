import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const HeroSocials = () => {
  return (
    <div className="hero__socials">
      <a
        href="https://www.linkedin.com/in/mark-rigney-640992b6/"
        target="blank"
        aria-label="linkedin profile"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/KramYengir?tab=repositories"
        target="blank"
        aria-label="github profile"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.instagram.com/rigneymade.webdev"
        target="blank"
        aria-label="instagram profile"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default HeroSocials;
