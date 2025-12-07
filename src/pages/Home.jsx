import React from "react";
import bgimg from "../assets/bg-img.png";
import "./Home.scss";
import backgroundimg from "../assets/hero-bg.png";
import ProjectCard from "../components/Project-card";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Add animate class after component mounts
    const heroRoles = document.querySelector(".Hero-roles");
    const heroName = document.querySelector(".Hero-name");
    const heroImg = document.querySelector(".Hero-banner-container img");

    // Slight stagger for professional effect
    setTimeout(() => heroRoles?.classList.add("animate"), 100);
    setTimeout(() => heroName?.classList.add("animate"), 300);
    setTimeout(() => heroImg?.classList.add("animate"), 500);
  }, []);
  return (
    <div className="Homepage-container">
      <div className="Hero-banner-container">
        <div className="Hero-roles">
          <a>
            <span className="highlight">UI/UX DESIGNER</span> &{" "}
            <span className="highlight">FRONTEND DEVELOPER</span>
          </a>
        </div>
        <img src={bgimg} alt="Dipak's Photo" />
        <div className="Hero-container">
          <div className="Hero-name">
            <a><span className="highlight">DIPAK</span></a>
            <a><span className="highlight">PAHARI</span></a>
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
