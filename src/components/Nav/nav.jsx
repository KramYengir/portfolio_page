import "./nav.css";
import { IoMdHome } from "react-icons/io";
import { FaInfoCircle, FaListAlt, FaTools } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [isActive, setIsActive] = useState("#");

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
