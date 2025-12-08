import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects";
import PrimaryButton from "../components/Primary-button";

function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Find the project based on the URL
 const project = projects.find(p => p.id === projectId);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="Project-detail-page">
      <button className="Back-button" onClick={() => navigate(-1)}>← Back</button>

      <div className="Project-detail-container">
        <h1 className="Project-detail-name">{project.name}</h1>
        <span className="Project-detail-date">{project.date}</span>

        <div className="Project-detail-info">
          <div>
            <strong>{project.typeLabel}:</strong> {project.client}
          </div>
          <div>
            <strong>Role:</strong> {project.role}
          </div>
          {project.live && project.live !== "Unavailable" && (
            <div>
              <strong>Live Link:</strong>{" "}
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                Check it out
              </a>
            </div>
          )}
        </div>

        <div className="Project-detail-image">
          <img src={project.image} alt={project.name} />
        </div>

        <PrimaryButton text="SEE ALL PROJECTS" onClick={() => navigate("/project")} />
      </div>
    </div>
  );
}

export default ProjectDetail;
