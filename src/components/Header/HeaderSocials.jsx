import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/mark-rigney-640992b6/"
        target="blank"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/KramYengir?tab=repositories" target="blank">
        <FaGithub />
      </a>
      {/* <a
        href="https://www.upwork.com/freelancers/~0103b0000a375c78c2"
        target="blank"
      >
        <FaInstagram />
      </a> */}
    </div>
  );
};

export default HeaderSocials;
