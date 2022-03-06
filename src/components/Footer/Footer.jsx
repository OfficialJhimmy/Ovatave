import React, { useState, useEffect } from "react";
import {
  BsTwitter,
  BsInstagram,
  BsPinterest,
  BsLinkedin,
} from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  const getCurrentDate = dateState.toLocaleTimeString();

  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="footer-logo">
            <h2>Ovatave</h2>
            <div className="footer-socials">
              <BsTwitter className="footer-socials-icon" />
              <BsInstagram className="footer-socials-icon" />
              <BsLinkedin className="footer-socials-icon" />
              <BsPinterest className="footer-socials-icon" />
              <FaTiktok className="footer-socials-icon" />
            </div>
          </div>
          <div className="footer-location">
            <h2>Officies</h2>
            <h3>Lagos Office HQ</h3>
            <p>
              20, Fake Address, Opposite Zuruck Towers, <br />
              Banana Island, Lagos, NGA
            </p>

            <h3>Malmo Office</h3>
            <p>
              Stockholm office <br />
              Sankt Eriksgatan 48F <br />
              112 34 Stockholm
            </p>
          </div>
          <div className="footer-time">
            <h3>{getCurrentDate}</h3>
          </div>
        </div>
        <div className="footer-end">
          <div className="footer--bottom__left">
            <p>&#169;2022. All rights reserved OVATAVE.</p>
          </div>
          <div className="footer--bottom__right">
            <p>
              Developed by{" "}
              <a
                href="https://twitter.com/jhimmyofficial"
                target="_blank"
                rel="noreferrer"
              >
                {""}JhimmyOfficial
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
