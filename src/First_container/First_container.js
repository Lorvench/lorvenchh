import React from "react";
import About_info from "./About_info/About_info";
import Changing_text from "./Changing_text/Changing_text";
import Community from "./community/Comm";
import Connect from "./Connect/Connect";
import Copyright from "./Copyright/Copyright";
import Fixed_compt_slider from "./Fixed_compt_slider/Fixed_compt_slider";
import Globe from "./Globe_animi/Globe";
import Little_nav from "./Little_nav/Little_nav";
import Portfolio_section from "./Portfolit_section/Portfolio_section";
import Skill from "./Skill_set/Skill";
import Social_links from "./Social_links/Social_links";
import "./Style/Style.css";

const First_container = () => {
  return (
    <div className="cont1">
      <div className="Little_nav_cont">
        {" "}
        <Little_nav />
        <Changing_text />
        <Globe />
        <Social_links />
        <About_info />
        <Portfolio_section />
        <Skill />
        <Community />
        <Connect />
        <Copyright />
      </div>
    </div>
  );
};

export default First_container;
