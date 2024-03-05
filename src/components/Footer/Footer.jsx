import "./Footer.css";
import logo from "../../assets/rigneymade-logo.svg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        <img src={logo} alt="" />
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
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/KramYengir" target="blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mark-rigney-640992b6/"
          target="blank"
        >
          <FaLinkedin />
        </a>
        {/* <a
          href="https://www.upwork.com/freelancers/~0103b0000a375c78c2"
          target="blank"
        >
          <FaInstagram />
        </a> */}
        {/* <a href="https://www.facebook.com/" target="blank">
          <FaFacebook />
        </a> */}
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
