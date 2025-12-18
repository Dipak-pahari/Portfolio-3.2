import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../components/Section-title";
import projects from "../data/projects";
import "./Project.scss";
import Footer from "../components/Footer.jsx";

const ProjectPageCard = ({ project, index }) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);

  // Entry animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
  }, []);

  const handleCardClick = () => {
    navigate(project.detailPage);
  };

  return (
    <div
      ref={cardRef}
      className="ProjectPage-Project-card-full"
      style={{ animationDelay: `${index * 80}ms` }}
      onClick={handleCardClick}
    >
      {/* Tags */}
      {project.tags && project.tags.length > 0 && (
        <div className="ProjectPage-Project-card-tags">
          {project.tags.map((tag, index) => (
            <div
              key={index}
              className="ProjectPage-Project-tag"
              style={{ backgroundColor: tag.color }}
            >
              {tag.text}
            </div>
          ))}
        </div>
      )}

      {/* Image */}
      <div className="ProjectPage-Project-card-image-wrapper">
        <img
          src={project.image}
          alt={project.name}
          className="ProjectPage-Project-card-image"
        />
      </div>

      {/* Title */}
      <div className="ProjectPage-Project-card-meta">
        <span className="ProjectPage-Project-card-title">
          {project.name}
        </span>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <div className="ProjectPage-project-container">
      {/* Description */}
      <div className="ProjectPage-Project-description">
        <span>My Works</span>
        <span>
          Collection of my recent projects showcasing UI/UX design and
          front-end development work. Each project represents a unique
          challenge and creative solution.
        </span>
      </div>

      {/* Projects */}
      <div className="ProjectPage-allprojects-container">
        <SectionTitle title="ALL PROJECT" />
        <div className="ProjectPage-allprojects-grid">
          {projects.map((project, index) => (
            <ProjectPageCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Project;
