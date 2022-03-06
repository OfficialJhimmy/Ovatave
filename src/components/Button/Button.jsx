import React from "react";
import ScribbleArrow from "../../assets/icons/scribble.png";
import "./index.css";

function Button({ title }) {
  return (
    <div className="button__wrapper">
      <button>
        <span>{title}</span>

        <img src={ScribbleArrow} alt="button arrow" />
      </button>
    </div>
  );
}

export default Button;
