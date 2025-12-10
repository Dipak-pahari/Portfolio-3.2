import { useState } from "react";
import { useNavigate } from "react-router-dom"; // for navigation
import "./Project-card.scss";
import SectionTitle from "../components/Section-title";
import PrimaryButton from "./Primary-button";
import Larrow from "../assets/LightArrow.png";
import Darrow from "../assets/DarkArrow.png";
import projects from "../data/projects";

function ProjectRow({ project, index, selectedIndex, setSelectedIndex }) {
  const isSelected = index === selectedIndex;

  return (
    <div
      className={`Project-row ${isSelected ? "selected" : ""}`}
      onClick={() => setSelectedIndex(index)}
    >
      <span>{project.name}</span>
      <span>{project.type}</span>
      <span>{project.date}</span>

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

function ProjectBox({ project, onPrev, onNext }) {
  const navigate = useNavigate();

  return (
    <div className="Project-box">
      <Arrow direction="left" onClick={onPrev} />
      <div className="Project-inside-box">
        <div className="Project-meta-container">
          <div className="Project-details-container">
            <span className="Date-container">{project.date}</span>
            <div className="Project-details">
              <div className="Sub-detail-container">
                <span className="Project-name">{project.name}</span>
              </div>
              <div className="Sub-details-list">
                <div className="Sub-detail-container">
                  <span className="Project-subtitle">{project.typeLabel}:</span>
                  <span className="Project-description">{project.client}</span>
                </div>
                <div className="Sub-detail-container">
                  <span className="Project-subtitle">Role:</span>
                  <span className="Project-description">{project.role}</span>
                </div>
                {project.live && project.live !== "Unavailable" && (
                  <div className="Sub-detail-container">
                    <span className="Project-subtitle">Live Link:</span>
                    <a
                      href={project.live}
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
          <PrimaryButton
            text="SEE DETAILS"
            onClick={() => navigate(project.detailPage)}
          />
        </div>
        <div className="project-image">
          <img src={project.image} alt={project.name} />
        </div>
      </div>
      <Arrow direction="right" onClick={onNext} />
    </div>
  );
}

function ProjectCard() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="Project-container">
      <SectionTitle title="PROJECT" />
      <div className="Project-card">
        <div className="Project-card-container">
          <ProjectBox
            project={projects[selectedIndex]}
            onPrev={handlePrev}
            onNext={handleNext}
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
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
