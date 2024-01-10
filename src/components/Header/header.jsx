import CTA from "./CTA";
import HeaderSocials from "./headerSocials";
import "./header.css";
import myImg from "../../assets/me2.jpg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I am </h5>
        <h1>Mark Rigney</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <CTA></CTA>
        <HeaderSocials />
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
