import React, { useState, useEffect } from "react";
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
import Footer from "../components/Footer";
import PrimaryButton_2 from "../components/SecondaryButton";
import { useNavigate } from "react-router-dom";

// PDFs
import Resume from "../assets/DipakPahariResume.pdf";
import SRITYOGCertificate from "../assets/SRIYOGCertificate.pdf";
import SRIYOGRecommendation from "../assets/SRIYOGRecommendation.pdf";
import FigmaCertificate from "../assets/FigmaCertificate.pdf";

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

function CertificateCard({
  title,
  CompanyName,
  link1,
  link2,
  date,
  openModal,
}) {
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
        {link1 && (
          <span
            className="certificate-link"
            onClick={() => openModal(link1)}
            style={{
              cursor: "pointer",
              color: "blue",
              textDecoration: "underline",
            }}
          >
            View Certificate
          </span>
        )}
        {link2 && (
          <span
            className="certificate-link"
            onClick={() => openModal(link2)}
            style={{
              cursor: "pointer",
              color: "blue",
              textDecoration: "underline",
              marginLeft: "10px",
            }}
          >
            View Recommendation Letter
          </span>
        )}
      </div>
    </div>
  );
}

function About() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [pdfZoom, setPdfZoom] = useState(100);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [modalOpen]);

  // Handle PDF zoom based on window width
  useEffect(() => {
    const updateZoom = () => {
      if (window.innerWidth <= 480) setPdfZoom(65);
      else if (window.innerWidth <= 768) setPdfZoom(75);
      else setPdfZoom(100);
    };
    updateZoom();
    window.addEventListener("resize", updateZoom);
    return () => window.removeEventListener("resize", updateZoom);
  }, []);

  const openModal = (file) => {
    setModalContent(file);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent("");
  };

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
      {/* About Section */}
      <div className="AboutPage-About-section-container AboutSectionAnimate">
        <SectionTitle title="ABOUT ME" />
        <div className="AboutPage-About-section-content">
          <div className="AboutPage-About-section">
            <div className="AboutPage-About-section-text">
              <p>Hi, I'm Dipak Pahari.</p>
              <p>
                I'm a UX/UI Designer with decade years of experience creating
                intuitive, modern interfaces for web and mobile applications. I
                also have basic front-end skills in React, HTML, CSS, and
                JavaScript, which help me understand how designs are implemented
                in code. I'm currently pursuing my Bachelor's in Computer
                Application at Divya Gyan College.
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
              onClick={() => {
                const link = document.createElement("a");
                link.href = Resume;
                link.download = "DipakPahariResume.pdf";
                link.click();
              }}
              className="AboutPage-Aboutbtn"
              style={{ width: "230px" }}
            />
          </div>
          <img src={AboutImg} alt="About Dipak Pahari image" />
        </div>
      </div>

      {/* Skills Section */}
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

      {/* Tools Section */}
      <div className="AboutPage-tool-section-container">
        <SectionTitle title="TOOLS I USE" />
        <div className="ToolsCardGrid">
          {tools.map((tool, index) => (
            <ToolsCard key={index} icon={tool.icon} title={tool.title} />
          ))}
        </div>
      </div>

      {/* Work History */}
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

      {/* Certificates */}
      <div className="AboutPage-certificate-section-container">
        <SectionTitle title="CERTIFICATES & RECOMMENDATIONS" />
        <div className="WorkHistoryCardGrid">
          <CertificateCard
            title="UI/UX Design Internship"
            CompanyName="SRIYOG Consulting"
            link1={SRITYOGCertificate}
            link2={SRIYOGRecommendation}
            date="2025"
            openModal={openModal}
          />
          <CertificateCard
            title="Introduction to Figma"
            CompanyName="Simple Learn"
            link1={FigmaCertificate}
            date="2025"
            openModal={openModal}
          />
        </div>
      </div>

      {/* Banner */}
      <div className="BannerContainer">
        <div className="BannerTextContainer">
          <p>Let’s Work Together</p>
          <p>
            I'm always interested in hearing about new projects and
            opportunities. Feel free to reach out!
          </p>
        </div>
        <div className="BannerButtonContainer">
          <PrimaryButton
            text="GET IN TOUCH"
            onClick={() => navigate("/contact")}
          />
          <PrimaryButton_2
            text="DOWNLOAD RESUME"
            onClick={() => {
              const link = document.createElement("a");
              link.href = Resume;
              link.download = "DipakPahariResume.pdf";
              link.click();
            }}
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {modalOpen && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center", // Center vertically on all screens
            zIndex: 1000,
            padding: "12px",
            boxSizing: "border-box",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width:
                window.innerWidth <= 480
                  ? "82%"
                  : window.innerWidth <= 768
                  ? "85%"
                  : "90%",
              height:
                window.innerWidth <= 480
                  ? "70%"
                  : window.innerWidth <= 768
                  ? "75%"
                  : "90%",
              maxWidth: "1200px",
              maxHeight: "90%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center", // Center PDF vertically
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "-14px",
                right: "-14px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#e53935",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontSize: "20px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1001,
              }}
            >
              ×
            </button>

            {/* PDF / Image */}
            {modalContent.endsWith(".pdf") ? (
              <iframe
                src={`${modalContent}#view=FitH&zoom=${
                  window.innerWidth <= 480
                    ? 65
                    : window.innerWidth <= 768
                    ? 75
                    : 100
                }`}
                title="PDF Viewer"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "6px",
                  backgroundColor: "#000",
                }}
              />
            ) : (
              <img
                src={modalContent}
                alt="Certificate"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  borderRadius: "6px",
                  objectFit: "contain",
                }}
              />
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default About;
