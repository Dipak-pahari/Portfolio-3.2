import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import projects from "../data/projects";
import "./ProjectDetail.scss";
import SectionTitle from "../components/Section-title";
import PrimaryButton from "../components/Primary-button";
import Footer from "../components/Footer";

/* ================= Scroll Reveal Hook ================= */
function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ================= Detail Box ================= */
function ProjectDetailBox({ label, value, isLink, isResponsibilities }) {
  if (!value) return null;

  return (
    <div
      className={`Project-detail-box ${
        isResponsibilities ? "full-width" : ""
      }`}
    >
      <span className="title-sub-text">{label}</span>

      {isResponsibilities ? (
        <span className="body-sub-text">{value}</span>
      ) : isLink && value !== "Unavailable" ? (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="body-sub-text live-link"
        >
          Visit
        </a>
      ) : (
        <span className="body-sub-text">{value}</span>
      )}
    </div>
  );
}

/* ================= Page ================= */
function ProjectDetail() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  useRevealOnScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const project = projects.find((p) => p.id === projectId);
  if (!project) return <div>Project not found</div>;

  return (
    <div className="Project-detail-page page-enter">
      <div className="Project-detail-container">
        {/* ================= Project Card ================= */}
        <div className="Project-detail-card reveal">
          {/* ================= Breadcrumb ================= */}
        <div className="Breadcrumb-container reveal">
          <span
            className="Breadcrumb-text"
            onClick={() => navigate("/project")}
          >
            ← Back to Projects
          </span>
        </div>
          <div className="Project-dates">
            <span className="Time-container">{project.date}</span>
            {project.type}
          </div>

          <div className="Project-meta-data">
            <span className="Project-title">{project.name}</span>

            <div className="Project-info">
              <div className="Project-sub-info">
                <ProjectDetailBox
                  label={project.typeLabel}
                  value={project.client}
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

        {/* ================= Gallery ================= */}
        <div className="Project-showcase-container reveal">
          <div className="Project-showcase">
            {project.galleryImages?.length > 0 ? (
              <div className="Image-grid">
                {project.galleryImages.map((img, index) => {
                  const imgSrc =
                    typeof img === "string"
                      ? img
                      : img.default || (typeof img === "object" ? img.src : "");
                  return (
                    <img
                      key={index}
                      src={imgSrc}
                      alt={`project-${index}`}
                      className="grid-image"
                      loading="eager"
                      style={{ maxWidth: "100%", height: "auto", margin: "0 auto" }}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="Gallery-placeholder">{project.galleryNote}</div>
            )}
          </div>
        </div>
      </div>

      {/* ================= Overview ================= */}
      <div className="Project-overview-section reveal">
        <SectionTitle title="OVERVIEW" />
        <div className="Text-container">
          <span>{project.overviewText1}</span>
          <span>{project.overviewText2}</span>
        </div>
      </div>

      {/* ================= Design System ================= */}
      <div className="Design-section reveal">
        <SectionTitle title="DESIGN SYSTEM" />

        <div className="Color-pallette-container">
          <div className="Color-pallette-text">
            <span>Color Palette</span>
            <span>{project.colordescription}</span>
          </div>
          <div className="Color-palette">
            {project.colors.map((color, i) => (
              <div key={i} className="colors-box" style={{ backgroundColor: color }}>
                {color}
              </div>
            ))}
          </div>
        </div>

        {project.typography?.length > 0 && (
          <div className="Typography-container">
            {project.typography.map((item, i) => (
              <div key={i} className="Typography-box">
                <div className="Typography-text">
                  <span className="Typography-title">{item.title}</span>
                  <span className="Typography-description">{item.description}</span>
                </div>
                <img src={item.image} alt={item.title} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================= Impact ================= */}
      {project.impact?.length > 0 && (
        <div className="Impact-section reveal">
          <SectionTitle title="IMPACT" />
          <div className="Impact-container">
            {project.impact.map((item, i) => (
              <div key={i} className="Impact-box">
                <div className="Problem-no">PROBLEM {i + 1}</div>
                <div className="Project-texts">
                  <span className="Impact-title">{item.title}</span>
                  <div className="Impact-meta">
                    <span className="Impact-label">Solution:</span>
                    <span className="description">{item.solution}</span>
                  </div>
                  <div className="Impact-meta">
                    <span className="Impact-label">Outcome:</span>
                    <span className="description">{item.outcome}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="Back-to-project">
            <PrimaryButton
              text="VIEW ALL PROJECT"
              className="view-all-project"
              onClick={() => navigate("/project")}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default ProjectDetail;
