import "./Navbar.css";
import React from "react";
import { Link } from "react-scroll";
import Toggle from "../Toggle/Toggle";
import { ROUTES } from "../../constants";

const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Full Stack Developer</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to={ROUTES.NAVBAR} spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to={ROUTES.SERVICES} spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to={ROUTES.WORKS} spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to={ROUTES.PORTFOLIO} spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to={ROUTES.TESTIMONIAL} spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        <Link to={ROUTES.CONTACT} spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
