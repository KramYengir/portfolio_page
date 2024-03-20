import CTA from "./CTA";
import HeroSocials from "./HeroSocials";
import "./Hero.css";
import logo from "../../assets/rigneymade-logo-cropped-white.svg";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero__container">
        <div className="hero__info">
          <img
            className="logo"
            src={logo}
            alt="logo in the style of handwritten R M"
          />
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
          <HeroSocials />
        </div>
        <div className="statement">
          <h2 className="uppercase text-accent fs-700 letter-spacing-3">
            <span>I create </span>Websites tailored for <br />
            <span>Your Success</span>
          </h2>
          <p className="text-white fs-400">
            With a strong foundation in web fundamentals, I specialize in
            crafting bespoke sites that attract customers and empower small
            businesses. Let&apos;s work together to elevate your online presence
            and bring your vision to life.
          </p>
          <CTA></CTA>
        </div>
      </div>
    </section>
  );
};

export default Hero;
