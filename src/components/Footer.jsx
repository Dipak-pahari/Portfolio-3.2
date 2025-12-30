import "./Footer.scss";
import EmailIcon from "../assets/email-icon.svg";
import PhoneIcon from "../assets/phone-icon.svg";
import LocationIcon from "../assets/location-icon.svg";
import FooterArrow from "../assets/footer-arrow.svg";
import TopArrow from "../assets/top-arrow.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

function Footer() {
  const navigate = useNavigate();

  const upperRef = useRef(null);
  const middleRef = useRef(null);
  const lowerRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const sections = [upperRef.current, middleRef.current, lowerRef.current];

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => section && observer.observe(section));

    return () => sections.forEach((section) => section && observer.unobserve(section));
  }, []);

  return (
    <footer className="Footer-container">
      {/* Upper Footer */}
      <div className="Upper-footer Footer-animate" ref={upperRef}>
        <div className="Footer-details">
          <div className="Contact-cta">
            <span>Get In Touch</span>
            <span>Let's collaborate and create something amazing together.</span>
          </div>
          <div className="Contact-info">
            <div className="Contact-box PhoneNo_Icon">
              <img src={PhoneIcon} alt="Phone Icon" className="phone-icon" />
              <a href="tel:+9779708906594">+977 9708906594</a>
            </div>
            <div className="Contact-box E-mail_Icon">
              <img src={EmailIcon} alt="Email Icon" className="icon" />
              <a href="mailto:nexgen.d.pahari@gmail.com">nexgen.d.pahari@gmail.com</a>
            </div>
            <div className="Contact-box Location_Icon">
              <img src={LocationIcon} alt="Location Icon" className="icon" />
              <span>Bashundhara, Kathmandu, Nepal</span>
            </div>
          </div>
        </div>

        <button className="Go-to-top" onClick={scrollToTop}>
          <img src={TopArrow} alt="Arrow Up" className="arrowTop" />
        </button>
      </div>

      {/* Middle Footer */}
      <nav className="Middle-footer Footer-animate" ref={middleRef}>
        <span onClick={() => navigate("/")}>HOME</span>
        <span onClick={() => navigate("/about")}>ABOUT</span>
        <span onClick={() => navigate("/project")}>WORK</span>
        <span onClick={() => navigate("/contact")}>CONTACT</span>
      </nav>

      {/* Lower Footer */}
      <div className="Lower-footer Footer-animate" ref={lowerRef}>
        <div className="Social-links">
          <a href="https://www.behance.net/dipakpahari1" target="_blank" rel="noopener noreferrer">
            Behance <img src={FooterArrow} alt="Arrow" className="arrow" />
          </a>
          <a href="https://www.linkedin.com/in/iamu" target="_blank" rel="noopener noreferrer" >
            LinkedIn <img src={FooterArrow} alt="Arrow" className="arrow" />
          </a>
        </div> 
        <span>© 2025 Dipak Pahari · All Rights Reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
