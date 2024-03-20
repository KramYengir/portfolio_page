import "./Footer.css";
import logo from "../../assets/rigneymade-logo-cropped-black.svg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo" aria-label="logo">
        <img src={logo} alt="logo n the style of handwritten R M" />
      </a>

      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Porfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://github.com/KramYengir"
          target="blank"
          aria-label="github profile"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mark-rigney-640992b6/"
          target="blank"
          aria-label="linkedin profile"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/rigneymade88"
          target="blank"
          aria-label="instagram profile"
        >
          <FaInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          Rigney<span>Made</span> 2024 &copy;
        </small>
      </div>
    </footer>
  );
};

export default Footer;
