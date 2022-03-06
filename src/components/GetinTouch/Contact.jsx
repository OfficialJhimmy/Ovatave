import React, { useEffect } from "react";
import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="contact__container" name="contact">
      <div className="contact__wrapper">
        <div className="contact__left" data-aos="fade-down">
          <div className="contact-line"></div>
          <p>
            React out, <br />
            We'll be there
          </p>
        </div>
        <div
          className="contact__right"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <h2>Contact.</h2>
        </div>
      </div>
      <div className="contact__info" data-aos="fade-down" data-aos-delay="350">
        <h2>Business Inquires</h2>
        <h2>
          Lambo Abdul <br />/ Director
        </h2>
        <p>+23424456789</p>
        <p>lambo@ovatave.inc</p>
      </div>
      <div
        className="further__inquires"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <h2>General Inquires</h2>
        <p>wecare@ovatave.inc</p>
      </div>
    </div>
  );
}

export default Contact;
