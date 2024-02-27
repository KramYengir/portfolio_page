import { useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const SliderButton = ({ isMobileNavVisible, setIsMobileNavVisible }) => {
  return (
    <button
      className="nav-slider"
      onClick={() => setIsMobileNavVisible(!isMobileNavVisible)}
    >
      {isMobileNavVisible ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
    </button>
  );
};

export default SliderButton;
