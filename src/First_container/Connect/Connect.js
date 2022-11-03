import React from "react";
import "../Connect/Connect.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
const Connect = () => {
  return (
    <div className="connect">
      <AnimationOnScroll animateIn="animate__tada">
        {" "}
        <h1> Howdy 👋 </h1>{" "}
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <p>let's get to know ourselves more</p>{" "}
      </AnimationOnScroll>

      <div className="social">
        {" "}
        <span>
          <a href="https://www.linkedin.com/in/joseph-salako-471aba229">
            {" "}
            LinkedIn
          </a>{" "}
          💼
        </span>{" "}
        <br />
        <span>
          <a href="https://twitter.com/lorvench"> Twitter</a> 🐤
        </span>
        <br />
        <span>
          <a href="https://github.com/Lorvench"> Github</a> 🧬
        </span>
        <br />
        <span>
          <a href="https://www.instagram.com/official_lorvench/"> Instagram</a>{" "}
          📸
        </span>{" "}
        <br />
        <span>
          <a href="https://salakololade17@gmail.com"> E-mail</a> 📧
        </span>{" "}
        <br />
        <span>
          <a href="https://lorvench.com/"> My personal Website</a> 🌐
        </span>
      </div>
    </div>
  );
};

export default Connect;
