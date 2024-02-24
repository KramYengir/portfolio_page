import CTA from "./CTA";
import HeaderSocials from "./headerSocials";
// import { MdOutlineChangeCircle } from "react-icons/md";
import "./header.css";
import logo from "../../assets/rigneymade-logo-white.svg";
import me from "../../assets/porto-photo-square.jpg";
// import { useState } from "react";

const Header = () => {
  // const [isLogo, setIsLogo] = useState(true);

  return (
    <header>
      {/* <button onClick={() => setIsLogo(!isLogo)} className="change-logo">
        <MdOutlineChangeCircle />
      </button> */}
      <div className="container header__container">
        <div className="header__info">
          <img className="logo" src={logo} alt="" />
          {/* {!isLogo && <img className="avatar" src={me} alt="Website Author" />} */}
          <div className="title">
            <p className="fs-400 text-white">Hello, I am </p>
            <h1 className="uppercase fs-700 ff-sans text-white">Mark Rigney</h1>
            <p
              className="uppercase fs-200 text-accent letter-spacing-3"
              style={{ "--alpha": "0.95" }}
            >
              Frontend Developer
            </p>
          </div>
          <HeaderSocials />
        </div>
        <div className="statement">
          <h2 className="uppercase text-accent fs-700 letter-spacing-3">
            <span>I create </span>Websites tailored for <br />
            <span>Your Success</span>
          </h2>
          <p className="text-white fs-400">
            With a strong foundation in web fundamentals, I specialize in
            crafting bespoke sites that attract customers and empower small
            businesses. Let&apos;s collaborate to elevate your online presence
            and bring your vision to life.
          </p>
          <CTA></CTA>
        </div>
      </div>
    </header>
  );
};

export default Header;
