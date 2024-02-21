import CTA from "./CTA";
import HeaderSocials from "./headerSocials";
import "./header.css";
import logo from "../../assets/rigneymade-logo-white.svg";
import myImg from "../../assets/me2.jpg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__info">
          <img className="logo" src={logo} alt="" />
          <h5>Hello, I am </h5>
          <h1>Mark Rigney</h1>
          <h5 className="text-light">Frontend Developer</h5>
          <CTA></CTA>
          <HeaderSocials />
        </div>
        <div className="statement">
          <h3>Tailored Websites for Your Success</h3>
          <p>
            With a strong foundation in web fundamentals, I specialize in
            crafting bespoke sites that attract customers. Let&apos;s
            collaborate to elevate your online presence and bring your vision to
            life.
          </p>
        </div>
        <div className="me">
          <img src={myImg} alt="Photo of Creator" />
        </div>
        {/* <a href="#about" className="scroll__down">
          <FaArrowDown />
        </a> */}
      </div>
    </header>
  );
};

export default Header;
