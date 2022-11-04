import React from "react";
import Data from "../Data/Data.json";
import "./Style/Style.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
const Portfolio_section = () => {
  return (
    <div className="main_set_container">
      {Data.map((e) => (
        <div key={e.id} className="set_container">
          <AnimationOnScroll animateOnce={true} animateIn="animate__rubberBand">
            <h1>{e.tittle}</h1>
          </AnimationOnScroll>

          <span className="id">{e.id}</span>

          <img src={e.image} alt={e.tittle} className="themainimg" />

          {/* <p className="autor">{e.autor}</p> */}

          <div className="my_btn">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__rubberBand"
            >
              <p className="my_btn_p">
                <a href="https://github.com/Lorvench">View Project &#128193;</a>
              </p>
            </AnimationOnScroll>

            <a href="https://github.com/Lorvench">
              {" "}
              <i class="bi bi-github"></i>{" "}
            </a>

            <a href="https://www.linkedin.com/in/joseph-salako-471aba229/">
              {" "}
              <i class="bi bi-linkedin"> </i>{" "}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio_section;
