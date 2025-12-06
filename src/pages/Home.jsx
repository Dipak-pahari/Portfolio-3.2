import React from "react";
import bgimg from "../assets/bg-img.png";
import "./Home.scss";
import backgroundimg from "../assets/hero-bg.png";
import ProjectCard from "../components/Project-card";

const Home = () => {
  return (
    <div className="Homepage-container">
      <div className="Hero-banner-container">
        <div className="Hero-roles">
          <a>UI/UX DESIGNER & FRONTEND DEVELOPER</a>
        </div>
        <img src={bgimg} alt="Dipak's Photo" />
        <div className="Hero-container">
          <div className="Hero-name">
            <a>DIPAK</a>
            <a>PAHARI</a>
          </div>
          <a className="scroll-down-text">[SCROLL DOWN]</a>
        </div>
      </div>
      <div>
        <ProjectCard />
      </div>
      <div>
        <h1>body of about</h1>
      </div>
    </div>
  );
};

export default Home;
