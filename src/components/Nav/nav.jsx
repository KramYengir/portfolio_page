import "./nav.css";
import { IoMdHome } from "react-icons/io";
import { FaInfoCircle, FaListAlt, FaTools } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { useState, useEffect } from "react";

const Nav = () => {
  const [isActive, setIsActive] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position and update activeTab
      // You might need to adjust the logic based on your page structure
      const scrollPosition = window.scrollY;

      // Update activeTab based on scroll position
      // For example, check if certain sections are in view
      // and set the corresponding active tab
      // ...
      //console.log(scrollPosition);

      // Example:
      if (scrollPosition < 450) {
        setIsActive("#");
      } else if (scrollPosition > 844 && scrollPosition < 1450) {
        setIsActive("#about");
      } else if (scrollPosition > 2000 && scrollPosition < 2150) {
        setIsActive("#experience");
      } else if (scrollPosition > 2500 && scrollPosition < 3400) {
        setIsActive("#services");
      } else if (scrollPosition > 5880) {
        setIsActive("#contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Run the effect only once on mount

  return (
    <nav>
      <a
        href="#"
        className={isActive == "#" ? "active" : ""}
        onClick={() => setIsActive("#")}
      >
        <IoMdHome />
      </a>
      <a
        href="#about"
        className={isActive == "#about" ? "active" : ""}
        onClick={() => setIsActive("#about")}
      >
        <FaInfoCircle />
      </a>
      <a
        href="#experience"
        className={isActive == "#experience" ? "active" : ""}
        onClick={() => setIsActive("#experience")}
      >
        <FaListAlt />
      </a>
      <a
        href="#services"
        className={isActive == "#services" ? "active" : ""}
        onClick={() => setIsActive("#services")}
      >
        <FaTools />
      </a>
      <a
        href="#contact"
        className={isActive == "#contact" ? "active" : ""}
        onClick={() => setIsActive("#contact")}
      >
        <AiFillMessage />
      </a>
    </nav>
  );
};

export default Nav;
