import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";

import workFromHome from "../../assets/lottie/work from home1.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";

import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">

          {/* =========================
              LEFT SIDE
          ========================== */}

          <div className="greeting-text-div">
            <div className="greeting-content">

              {/* Professional Role */}
              <div className="greeting-role">
                GENAI ENGINEER
              </div>

              {/* Name */}
              <h1
                className={
                  isDark
                    ? "dark-mode greeting-text"
                    : "greeting-text"
                }
              >
                {greeting.title}

                <span className="wave-emoji">
                  {emoji("👋")}
                </span>
              </h1>

              {/* Introduction */}
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>

              {/* =========================
                  TECHNOLOGY STACK
              ========================== */}

              <div className="greeting-tech-stack">
                <span>Python</span>
                <span>RAG</span>
                <span>Agentic AI</span>
                <span>LangGraph</span>
                <span>LangChain</span>
                <span>Voice AI</span>
              </div>

              <div id="resume" className="empty-div"></div>

              {/* Social Media */}
              <SocialMedia />

              {/* =========================
                  CTA BUTTONS
              ========================== */}

              <div className="button-greeting-div">

                {/* View Projects */}
                <a
                  href="#projects"
                  className="hero-primary-button"
                >
                  View My Work
                </a>

                {/* Download Resume */}
                {greeting.resumeLink && (
                  <a
                    href={require("./resume.pdf")}
                    download="Naresh-Luhar-Resume.pdf"
                    className="hero-secondary-button"
                  >
                    Download Resume
                  </a>
                )}

                {/* Contact */}
                <a
                  href="#contact"
                  className="hero-contact-link"
                >
                  Let's Connect →
                </a>

              </div>

            </div>
          </div>

          {/* =========================
              RIGHT SIDE - LOTTIE
          ========================== */}

          <div className="greeting-image-div">
            <DisplayLottie animationData={workFromHome} />
          </div>

        </div>
      </div>
    </Fade>
  );
}