import "./Nav.css";
import { useState, useEffect } from "react";
import { IoMdHome } from "react-icons/io";
import { FaListAlt, FaTools } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("#");

  // State to track the last scroll position
  const [lastScrollTop, setLastScrollTop] = useState(0);
  // State to track whether the navbar is currently visible or hidden
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  // Effect hook to add scroll event listener and handle navbar visibility
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Get the current scroll position
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      // Calculate the change in scroll position since the last scroll event
      const delta = scrollTop - lastScrollTop;

      // Check if the absolute value of delta is greater than 60 pixels
      // or if the current scroll position is less than 60 pixels (indicating that the user is at the top of the page)
      if (Math.abs(delta) > 60 || scrollTop < 60) {
        // Threshold: Trigger effect after scrolling 60 pixels or when at the top
        // Set the visibility of the navbar based on the scroll direction and position
        setIsNavbarVisible(delta <= 0 || scrollTop < 100);
        // Update the last scroll position
        setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]); // Dependency array ensures that effect runs only when lastScrollTop changes

  return (
    <nav className={`${isNavbarVisible ? "visible" : "hidden"}`}>
      <ul>
        <li>
          <a
            href="#"
            className={activeLink === "#" ? "active" : ""}
            onClick={() => setActiveLink("#")}
          >
            <span className="icon">
              <IoMdHome />
            </span>
            <span className="label">Home</span>
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activeLink === "#about" ? "active" : ""}
            onClick={() => setActiveLink("#about")}
          >
            <span className="icon">
              <IoMdPerson />
            </span>
            <span className="label">About</span>
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className={activeLink === "#experience" ? "active" : ""}
            onClick={() => setActiveLink("#experience")}
          >
            <span className="icon">
              <FaListAlt />
            </span>
            <span className="label">Experience</span>
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className={activeLink === "#portfolio" ? "active" : ""}
            onClick={() => setActiveLink("#portfolio")}
          >
            <span className="icon">
              <FaFolderOpen />
            </span>
            <span className="label">Portfolio</span>
          </a>
        </li>
        <li>
          <a
            href="#services"
            className={activeLink === "#services" ? "active" : ""}
            onClick={() => setActiveLink("#services")}
          >
            <span className="icon">
              <FaTools />
            </span>
            <span className="label">Services</span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeLink === "#contact" ? "active" : ""}
            onClick={() => setActiveLink("#contact")}
          >
            <span className="icon">
              <AiFillMessage />
            </span>
            <span className="label">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
