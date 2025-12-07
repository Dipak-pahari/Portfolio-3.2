import "./Project-card.scss";
import SectionTitle from "../components/Section-title";
import PrimaryButton from "../components/Primary-button";
import Larrow from "../assets/LightArrow.png";
import Darrow from "../assets/DarkArrow.png";

function ProjectRow({ ProjectTitle, ProjectDate, ProjectType }) {
  return (
    <div className="Project-row">
      <span>{ProjectTitle}</span>
      <span>{ProjectType}</span>
      <span>{ProjectDate}</span>
    </div>
  );
}

function SubDetail({ SubDetailTitle, Description }) {
  return (
    <div>
      <span>{SubDetailTitle}</span>
      <span>{Description}</span>
    </div>
  );
}

function LightArrow() {
  return (
    <div className="Arrow-container">
      <img src={Larrow} alt="show next project" />
    </div>
  );
}

function DarkArrow() {
  return (
    <div className="Arrow-container">
      <img src={Darrow} alt="show previous project" />
    </div>
  );
}

function Projectbox({ ProjectDate, ProjectName }) {
  return (
    <div className="Project-box">
      <DarkArrow />
      <div className="Project-inside-box">
        <div className="Project-meta-container">
          <div className="Project-detials-container">
            <span className="Date-container">2025</span>
            <div className="Project-detials">
              <p>{ProjectName}</p>
              <SubDetail
                SubDetailTitle="Client:"
                Description="E-commerce Brand (Confidential)"
              />
              <SubDetail SubDetailTitle="Role:" Description="UI/UX Designer" />
              <SubDetail
                SubDetailTitle="Live Link:"
                Description="Unavailable"
              />
            </div>
          </div>
          <PrimaryButton text="SEE DETAILS" />
        </div>
        <div className="temp"></div>
      </div>
      <LightArrow />
    </div>
  );
}

function ProjectCard() {
  return (
    <div className="Prjoect-container">
      <SectionTitle title="PROJECT" />
      <div className="Project-card">
        <div className="Project-card-container">
          <Projectbox />
        </div>
        <div className="Project-list-container">
          <ProjectRow
            ProjectTitle="Savvy's Collection"
            ProjectType="E-commerece Website Design"
            ProjectDate="2025"
          />
          <ProjectRow
            ProjectTitle="Savvy's Collection"
            ProjectType="Webstie"
            ProjectDate="2025"
          />
          <ProjectRow
            ProjectTitle="Savvy's Collection"
            ProjectType="Webstie"
            ProjectDate="2025"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
