import React from "react";
import "./Style/Style.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const About_info = () => {
  return (
    <div>
      <div className="text1">
        <p>
          I am a Frontend developer &#129309;, building the Frontend of Websites
          and Web Applications that leads to the success of the overall product{" "}
          &#128519;
        </p>
        <p className="view_project">
          <a href="https://github.com/Lorvench">view project &#128193; </a>
        </p>
      </div>
      <div className="text2">
        <h2>
          {" "}
          <AnimationOnScroll
            animateIn="animate__shakeY"
            animateOut="animate__bounceOutRight"
          >
            <span className="project_text">
              Each project with Different unique idears
            </span>{" "}
          </AnimationOnScroll>{" "}
          &#128187;{" "}
        </h2>
      </div>
    </div>
  );
};

export default About_info;
