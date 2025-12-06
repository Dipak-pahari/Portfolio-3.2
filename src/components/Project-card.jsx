import "./Project-card.scss";
import SectionTitle from "../components/Section-title";

function ProjectRow({ProjectTitle, ProjectDate, ProjectType}) {
    return(
        <div className="Project-row">
        </div>
    );
}

function ProjectCard (){
    return(
        <div className="Prjoect-container" >
            <SectionTitle title="PROJECT" />
            <div className="Project-card">
                <div className="Project-card-container"></div>
                <div className="Project-list-container"></div>
            </div>
        </div>
    );
}

export default ProjectCard;