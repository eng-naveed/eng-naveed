import "./Intro.css";
import Profile from "../../img/profile.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import crown from "../../img/crown.png";
import React, { useContext } from "react";
import Github from "../../img/github.png";
import Vector2 from "../../img/Vector2.png";
import Vector1 from "../../img/Vector1.png";
import thumbup from "../../img/thumbup.png";
import { themeContext } from "../../Context";
import LinkedIn from "../../img/linkedin.png";
import { LINKS, TEXT } from "../../constants";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import glassesimoji from "../../img/glassesimoji.png";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
          <span>{TEXT.NAME}</span>
          <span/>
          <span>{TEXT.INTRO}</span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a target='_blank' href={LINKS.GITHUB}><img src={Github} alt="Github" /></a>
          <a target='_blank' href={LINKS.LINKEDIN}><img src={LinkedIn} alt="LinkedIn" /></a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Profile} alt="" />
        {/* animation */}
        
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "4%", left: "74%" }}
          whileInView={{ left: "58%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="TypeScript" />
        </motion.div>
        <motion.div
          initial={{ top: "4%", left: "-42%" }}
          whileInView={{ left: "-4%" }}
          transition={transition}
          className="floating-div"
        >
        <FloatinDiv img={thumbup} text1="JavaScript js" />
        </motion.div>
        <motion.div
          initial={{ top: "24%", left: "-42%" }}
          whileInView={{ left: "58%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="React Native" />
        </motion.div>
        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "8rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="React js" />
        </motion.div>
        <motion.div
          initial={{ left: "-9%", top: "18rem" }}
          whileInView={{ left: "19%" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Node,Express, Mongoodb" />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
