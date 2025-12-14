import { useParams } from "react-router-dom";
import projects from "../data/projects";
import "./ProjectDetail.scss";
import SectionTitle from "../components/Section-title";
import { useEffect } from "react";

function ProjectDetailBox({ label, value, isLink, isResponsibilities }) {
  const safeValue =
    value || "Website Design • User Research • Wireframing • Prototyping";

  return (
    <div
      className={`Project-detail-box ${isResponsibilities ? "full-width" : ""}`}
    >
      {/* Label */}
      <span className="title-sub-text">{label}</span>

      {/* Responsibilities */}
      {isResponsibilities ? (
        <span className="body-sub-text">{safeValue}</span>
      ) : (
        <>
          {/* Link or normal text */}
          {isLink && value && value !== "Unavailable" ? (
            <a
              href={value}
              target="_blank"
              rel="noopener noreferrer"
              className="body-sub-text live-link"
            >
              Visit
            </a>
          ) : (
            <span className="body-sub-text">{safeValue}</span>
          )}
        </>
      )}
    </div>
  );
}

function ProjectDetail() {
  const { projectId } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]); // run every time projectId changes

  // Find project by ID
  const project = projects.find((p) => p.id === projectId);

  if (!project) return <div>Project not found</div>;

  // Determine if client/company should be linkable
  const isClientLink =
    project.typeLabel?.toLowerCase().includes("client") ||
    project.typeLabel?.toLowerCase().includes("company");

  return (
    <div className="Project-detail-page">
      <div className="Project-detail-container">
        <div className="Project-detail-card">
          {/* Date + Type */}
          <div className="Project-dates">
            <span className="Time-container">{project.date}</span>
            {project.type}
          </div>

          {/* Project Title */}
          <div className="Project-meta-data">
            <span className="Project-title">{project.name}</span>

            <div className="Project-info">
              <div className="Project-sub-info">
                <ProjectDetailBox
                  label={project.typeLabel}
                  value={project.client} // just show the name
                  isLink={false} // ensure it's not clickable
                />
                <ProjectDetailBox label="Role" value={project.role} />

                <ProjectDetailBox label="Live" value={project.live} isLink />
              </div>
              <ProjectDetailBox
                label="RESPONSIBILITIES"
                value={project.responsibilities}
                isResponsibilities
              />
            </div>
          </div>
        </div>
        <div className="Project-showcase-container">
          <div className="Project-showcase">
            <div className="Image-grid">
              {project.galleryImages?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`project-img-${index}`}
                  className="grid-image"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="Project-overview-section">
        <SectionTitle title="OVERVIEW" />
        <div className="Text-container">
          <span>{project.overviewText1}</span>
          <span>{project.overviewText2}</span>
        </div>
      </div>

      <div className="Color-pallette-section">
        <SectionTitle title="DESIGN SYSTEM" />
        <div className="Color-pallette-container">
          <div className="Color-pallette-text">
            <span>Color Palette</span>
            <span>{project.colordescription}</span>
          </div>
          <div className="Color-palette">
            {project.colors && project.colors.length >= 2 ? (
              project.colors.map((color, index) => {
                // Determine text color based on background
                const c = color.startsWith("#") ? color.substring(1) : color;
                const r = parseInt(c.substr(0, 2), 16);
                const g = parseInt(c.substr(2, 2), 16);
                const b = parseInt(c.substr(4, 2), 16);
                const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
                const textColor = luminance < 128 ? "#fff" : "#000";

                return (
                  <div
                    key={index}
                    className="colors-box"
                    style={{ backgroundColor: color, color: textColor }}
                  >
                    {color}
                  </div>
                );
              })
            ) : (
              <span>No colors defined</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
