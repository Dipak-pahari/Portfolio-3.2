import { useState, useEffect, useRef } from "react";
import "./Project-card.scss";
import SectionTitle from "../components/Section-title";
import PrimaryButton from "./Primary-button";
import SecondaryButton from "./Secondary-button";
import Larrow from "../assets/LightArrow.png";
import Darrow from "../assets/DarkArrow.png";
import projects from "../data/projects";
import { useNavigate } from "react-router-dom";

function ProjectRow({ project, index, selectedIndex, setSelectedIndex }) {
  const isSelected = index === selectedIndex;

  return (
    <div
      className={`Project-row ${isSelected ? "selected" : ""}`}
      onClick={() => setSelectedIndex(index)}
    >
      <span>{project.name}</span>
      <div className="Project-row-info">
        <span>{project.type}</span>
        <span>{project.date}</span>
      </div>
      {!isSelected && (
        <div className="preview-rectangle">
          {project.video ? (
            <video autoPlay muted loop>
              <source src={project.video} type="video/mp4" />
            </video>
          ) : (
            <img src={project.image} alt={project.name} />
          )}
        </div>
      )}
    </div>
  );
}

function Arrow({ direction, onClick }) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    onClick();
    setTimeout(() => setClicked(false), 150);
  };

  const style = {
    background:
      direction === "left"
        ? hovered
          ? "#EFEFEF"
          : "#fff"
        : hovered
        ? "rgba(24,24,24,0.8)"
        : "#181818",
    transition: "background 0.2s",
  };

  const imgStyle = {
    transform: clicked ? "scale(1)" : hovered ? "scale(1.2)" : "scale(1)",
    transition: "transform 0.15s",
  };

  return (
    <div
      className={`Arrow-container ${direction}-arrow`}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      <img src={direction === "left" ? Darrow : Larrow} alt="" style={imgStyle} />
    </div>
  );
}

function ProjectBox({ project, onPrev, onNext, direction }) {
  const navigate = useNavigate();
  const [animating, setAnimating] = useState(false);
  const [currentProject, setCurrentProject] = useState(project);
  const [slideDirection, setSlideDirection] = useState("next");

  useEffect(() => {
    if (project !== currentProject) {
      setSlideDirection(direction);
      setAnimating(true);
      const timeout = setTimeout(() => {
        setCurrentProject(project);
        setAnimating(false);
      }, 300); // duration of slide
      return () => clearTimeout(timeout);
    }
  }, [project, direction]);

  return (
    <div className="Project-box">
      <Arrow direction="left" onClick={onPrev} />
      <div className={`Project-inside-box ${animating ? `slide-${slideDirection}` : "slide-in"}`}>
        <div className="Project-meta-container">
          <div className="Project-details-container">
            <span className="Date-container">{currentProject.date}</span>
            <div className="Project-details">
              <div className="Sub-detail-container">
                <span className="Project-name">{currentProject.name}</span>
              </div>
              <div className="Sub-details-list">
                <div className="Sub-detail-container">
                  <span className="Project-subtitle">{currentProject.typeLabel}:</span>
                  <span className="Project-description">{currentProject.client}</span>
                </div>
                <div className="Sub-detail-container">
                  <span className="Project-subtitle">Role:</span>
                  <span className="Project-description">{currentProject.role}</span>
                </div>
                {currentProject.live && currentProject.live !== "Unavailable" && (
                  <div className="Sub-detail-container">
                    <span className="Project-subtitle">Live Link:</span>
                    <a
                      href={currentProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="Project-description live-link"
                    >
                      Check it out
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <PrimaryButton text="SEE DETAILS" onClick={() => navigate(currentProject.detailPage)} />
        </div>
        <div className="project-image">
          <img src={currentProject.image} alt={currentProject.name} />
          <div className="mobile-project-button">
            <PrimaryButton text="SEE DETAILS" onClick={() => navigate(currentProject.detailPage)} />
          </div>
        </div>
      </div>
      <Arrow direction="right" onClick={onNext} />
    </div>
  );
}

function ProjectCard() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handlePrev = () => {
    setDirection("prev");
    setSelectedIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection("next");
    setSelectedIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className={`Project-container ${isVisible ? "visible" : ""}`}>
      <SectionTitle title="PROJECT" />
      <div className="Project-card">
        <div className="Project-card-container">
          <ProjectBox
            project={projects[selectedIndex]}
            onPrev={handlePrev}
            onNext={handleNext}
            direction={direction}
          />
        </div>
        <div className="Project-list-container">
          {projects.map((proj, index) => (
            <ProjectRow
              key={index}
              project={proj}
              index={index}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          ))}
          <SecondaryButton text="VIEW ALL" onClick={(e) => { e.stopPropagation(); navigate("/project"); }} />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
