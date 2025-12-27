import React from "react";
import "./About.scss";
import AboutImg from "../assets/aboutImg.png";
import SectionTitle from "../components/Section-title";
import PrimaryButton from "../components/Primary-button";
import DesignIcon from "../assets/DesignIcon.svg";
import SoftIcon from "../assets/SoftIcon.svg";
import DevIcon from "../assets/DevIcon.svg";
import FigmaIcon from "../assets/FigmaIcon.svg";
import FramerIcon from "../assets/FramerIcon.svg";
import ChatgptIcon from "../assets/ChatgptIcon.svg";
import GitIcon from "../assets/GitIcon.svg";
import GoogleAnalyticIcon from "../assets/GoogleAnalyticsIcon.svg";
import NotionIcon from "../assets/NotionIcon.svg";
import ReactIcon from "../assets/ReactIcon.svg";
import VSCodeIcon from "../assets/VSCodeIcon.svg";

function SkillCard({ icon, title, children }) {
  return (
    <div className="SkillCard">
      <div className="SkillTitle">
        <img src={icon} alt={title} />
        {title}
      </div>
      <div className="AboutPage-SkillDescription">
        <ul>{children}</ul>
      </div>
    </div>
  );
}

function ToolsCard({ icon, title }) {
  return (
    <div className="ToolsCardContainer">
      <img src={icon} alt={title} className="ToolsCard-icon" />
      <span className="ToolsCard-title">{title}</span>
    </div>
  );
}

function WorkHistoryCard({ title, CompanyName, description, date }) {
  return (
    <div className="WorkHistoryCardContainer AboutSectionAnimate">
      <div className="WorkHistoryCardDatas">
        <div className="WorkHistoryCardMetaData">
          <p>{title}</p>
          <p>{CompanyName}</p>
        </div>
        <div className="WorkHistoryCardDate">{date}</div>
      </div>
      <div className="WorkHistoryCardDescription">{description}</div>
    </div>
  );
}

function CertificateCard({ title, CompanyName, link1, link2, date }) {
  return (
    <div className="WorkHistoryCardContainer CertificateCardContainer AboutSectionAnimate">
      <div className="WorkHistoryCardDatas">
        <div className="WorkHistoryCardMetaData">
          <p>{title}</p>
          <p>{CompanyName}</p>
        </div>
        <div className="WorkHistoryCardDate">{date}</div>
      </div>
      <div className="WorkHistoryCardDescription CertificateLinks">
        <a href={link1} target="_blank" rel="noopener noreferrer">{link1}</a>
        <a href={link2} target="_blank" rel="noopener noreferrer">{link2}</a>
      </div>
    </div>
  );
}

function About() {
  const tools = [
    { icon: FigmaIcon, title: "Figma" },
    { icon: FramerIcon, title: "Framer" },
    { icon: ChatgptIcon, title: "ChatGPT" },
    { icon: GitIcon, title: "Git" },
    { icon: GoogleAnalyticIcon, title: "Google Analytics" },
    { icon: NotionIcon, title: "Notion" },
    { icon: ReactIcon, title: "ReactJS" },
    { icon: VSCodeIcon, title: "VS Code" },
  ];

  return (
    <div className="AboutPageContainer">
      <div className="AboutPage-About-section-container AboutSectionAnimate">
        <SectionTitle title="ABOUT ME" />
        <div className="AboutPage-About-section-content">
          <div className="AboutPage-About-section">
            <div className="AboutPage-About-section-text">
              <p>Hi, I’m Dipak Pahari.</p>
              <p>
                I’m a UX/UI Designer with 1.5 years of experience creating
                intuitive, modern interfaces for web and mobile applications. I
                also have basic front-end skills in React, HTML, CSS, and
                JavaScript, which help me understand how designs are implemented
                in code. I’m currently pursuing my Bachelor’s in Computer
                Science at Divya Gyan College.
              </p>
              <p>
                I specialize in designing user-friendly, clean interfaces,
                turning complex ideas into simple, intuitive solutions. I bring
                designs to life visually and can translate them into code with
                the help of AI, bridging the gap between design and
                implementation.
              </p>
            </div>
            <PrimaryButton
              text="DOWNLOAD RESUME"
              onClick={() => navigate("")}
              className="AboutPage-Aboutbtn"
              style={{ width: "230px" }}
            />
          </div>
          <img src={AboutImg} alt="About Dipak Pahari image" />
        </div>
      </div>

      <div className="AboutPage-skills-section-container">
        <SectionTitle title="SKILLS & EXPERTISE" />
        <div className="AboutPage-skills-card-container">
          <SkillCard icon={DesignIcon} title="Design">
            <li>UI/UX Design</li>
            <li>Wireframing & Prototyping</li>
            <li>User Research & Testing</li>
            <li>Design Systems</li>
            <li>Responsive Design</li>
            <li>Supporting Graphics / Illustrations</li>
            <li>Attention to Detail</li>
          </SkillCard>
          <SkillCard icon={SoftIcon} title="Soft Skills">
            <li>Problem Solving</li>
            <li>Effective Communication</li>
            <li>Collaboration & Teamwork</li>
            <li>Time Management</li>
            <li>Adaptability & Learning</li>
            <li>Creativity & Initiative</li>
          </SkillCard>
          <SkillCard icon={DevIcon} title="Development">
            <li>React (Basic)</li>
            <li>HTML5 & CSS3</li>
            <li>JavaScript (ES6+) (Basic)</li>
            <li>AI-assisted coding</li>
            <li>Git & Version Control</li>
          </SkillCard>
        </div>
      </div>

      <div className="AboutPage-tool-section-container">
        <SectionTitle title="TOOLS I USE" />
        <div className="ToolsCardGrid">
          {tools.map((tool, index) => (
            <ToolsCard key={index} icon={tool.icon} title={tool.title} />
          ))}
        </div>
      </div>

      <div className="AboutPage-history-section-container">
        <SectionTitle title="WORK HISTORY" />
        <div className="WorkHistoryCardGrid">
          <WorkHistoryCard
            title="Client-Based Projects"
            CompanyName="Savvy’s Collection"
            description="Designed a full e-commerce website for a client. Created responsive, user-friendly interfaces for all devices."
            date="2025 (Recent)"
          />
          <WorkHistoryCard
            title="UI/UX Designer (Intern → Team Lead)"
            CompanyName="SRIYOG Consulting (Completed)"
            description="Worked as a UI/UX design intern on multiple projects. Collaborated closely with developers and designers. Promoted to Project Team Lead during the internship."
            date="2025"
          />
        </div>
      </div>

      <div className="AboutPage-certificate-section-container">
        <SectionTitle title="CERTIFICATES & RECOMMENDATIONS" />
        <div className="WorkHistoryCardGrid">
          <CertificateCard
            title="UI/UX Design Internship"
            CompanyName="SRIYOG Consulting"
            link1="View Certificate"
            link2="View Recommendation Letter"
            date="2025"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
