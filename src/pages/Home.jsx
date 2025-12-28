import React, { useEffect } from "react";
import bgimg from "../assets/bg-img.png";
import "./Home.scss";
import ProjectCard from "../components/Project-card";
import PrimaryButton from "../components/Primary-button";
import SectionTitle from "../components/Section-title";
import aboutimg from "../assets/about.png";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Hero animation (still page load)
    const heroRoles = document.querySelector(".Hero-roles");
    const heroName = document.querySelector(".Hero-name");
    const heroImg = document.querySelector(".Hero-banner-container img");

    setTimeout(() => heroRoles?.classList.add("animate"), 100);
    setTimeout(() => heroName?.classList.add("animate"), 300);
    setTimeout(() => heroImg?.classList.add("animate"), 500);

    // Scroll-triggered animation for About section
    const aboutElements = [
      document.querySelector(".About-section-content"),
      document.querySelector(".About-section-text"),
      document.querySelector(".About-section-container img"),
    ];

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observerInstance.unobserve(entry.target); // Trigger once
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );

    aboutElements.forEach((el) => el && observer.observe(el));

    return () => {
      aboutElements.forEach((el) => el && observer.unobserve(el));
    };
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
            <a>
              <span className="highlight">DIPAK</span>
            </a>
            <a>
              <span className="highlight">PAHARI</span>
            </a>
          </div>
          <a className="scroll-down-text">[SCROLL DOWN]</a>
        </div>
      </div>

      <ProjectCard />

      <div className="About-section-container">
        <SectionTitle title="ABOUT ME" />
        <div className="About-section-content">
          <div className="About-section">
            <div className="About-section-text">
              <p>Hi, I'm Dipak Pahari.</p>
              <p>
                I'm a UX/UI Designer with 1.5 years of experience creating
                intuitive, modern interfaces for web and mobile applications. I
                also have basic front-end skills in React, HTML, CSS, and
                JavaScript, which help me understand how designs are implemented
                in code. I'm currently pursuing my Bachelor's in Computer
                Science at Divya Gyan College.
              </p>
            </div>
            <PrimaryButton
              text="LEARN MORE"
              onClick={() => navigate("/about")}
              className="Aboutbtn"
              style={{ width: "195px" }}
            />
          </div>
          <img src={aboutimg} alt="About Dipak Pahari" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
