import React, { useEffect } from "react";
import "./index.css";
import { gsap } from "gsap";

function CollageHeader() {
  useEffect(() => {
    gsap.fromTo(
      "#hero-text",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
      }
    );
  }, []);
  return (
    <div className="hero-text-section">
      <p id="hero-text">
        We believe that a great brand experience is intuitive. It speaks to your
        heart, not your brain and it provides answers instead of creating
        questions.
      </p>
    </div>
  );
}

export default CollageHeader;
