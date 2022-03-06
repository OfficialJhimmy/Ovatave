import React from "react";
import "./index.css";
import digital from "../../assets/icons/digital.png";
import forbes from "../../assets/icons/forbes.png";
import gannet from "../../assets/icons/gannet.png";
import nine from "../../assets/icons/nine.png";
import planet from "../../assets/icons/planet.png";
import times from "../../assets/icons/times.png";
import uol from "../../assets/icons/uol.png";
import vice from "../../assets/icons/vice.png";

function CollageUsedBy() {
  return (
    <div className="hero-usedBy">
      <div className="hero-usedBy-copy">
        <h2>TALENT MANAGEMENT</h2>
        <p>
          We were born from an understanding that sterile business sense is not
          mutually exclusive from creativity and artistry. In fact, when paired
          together, the two unearth a force to be reckoned with.
        </p>
      </div>
      <div className="hero-usedBy-ethos">
        <p>In Patnership with Global Brands like</p>
        <div className="hero-icon__container">
          <img src={digital} alt="our partners" />
          <img src={forbes} alt="our partners" />
          <img src={gannet} alt="our partners" />
          <img src={nine} alt="our partners" />
          <img src={planet} alt="our partners" />
          <img src={times} alt="our partners" />
          <img src={uol} alt="our partners" />
          <img src={vice} alt="our partners" />
        </div>
      </div>
    </div>
  );
}

export default CollageUsedBy;
