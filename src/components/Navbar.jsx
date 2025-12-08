import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import logo from "../assets/logo.svg";
import hamburger from "../assets/hamburger.png";
import cross from "../assets/cross.png";

//hamburger component
function Hamburger({ openMenu }) {
  return (
    <div className="toggle-button-menu">
      <div
        className="hamburger-container"
        style={{ display: openMenu ? "none" : "flex" }}
      >
        <img src={hamburger} alt="hamburger icon" />
      </div>

      <div
        className="cross-container"
        style={{ display: openMenu ? "flex" : "none" }}
      >
        <img src={cross} alt="cross icon" />
      </div>
    </div>
  );
}

// Navigation text component
function Navtext({ text, to }) {
  const location = useLocation();
  const isActive =
  location.pathname === to ||
  location.pathname.startsWith(to + "/");


  return (
    <div className="Navtext-container">
      <Link to={to} className={`Navigation-Link ${isActive ? "active" : ""}`}>
        {text}
      </Link>
      <div className="Navtext-underline"></div>
    </div>
  );
}

// Navbar component
function Navbar() {
  const [openMenu, setMenuState] = useState(false);
  const [transparent, setTransparent] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if(location.pathname === '/') { 
      const handleScroll = () => {
        const hero = document.querySelector('.Hero-banner-container');
        if(hero) {
          if(window.scrollY > hero.offsetHeight - 80) { 
            setTransparent(false); 
          } else {
            setTransparent(true); 
          }
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setTransparent(false);
    }
  }, [location]);

  return (
    <nav className="Navbar"
    style={{
    backgroundColor: transparent ? 'transparent' : 'rgba(0, 0, 0, 0.85)',
    backdropFilter: transparent ? 'none' : 'blur(5px)',
    transition: 'background-color 0.3s ease-in-out',
  }}
    >
      <div className="Inner-Navbar">
        <Link to="/">
          <img src={logo} alt="Portfolio Logo" />
        </Link>

        <div className="Toggle-Menu" onClick={() => setMenuState(!openMenu)}>
          <Hamburger openMenu={openMenu} />
        </div>

        <div className="nav-links">
          <Navtext text="HOME" to="/" />
          <Navtext text="ABOUT" to="/about" />
          <Navtext text="PROJECT" to="/project" />
          <Navtext text="CONTACT" to="/contact" />
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${openMenu ? "show" : ""}`}>
        <Navtext text="HOME" to="/" />
        <Navtext text="ABOUT" to="/about" />
        <Navtext text="PROJECT" to="/project" />
        <Navtext text="CONTACT" to="/contact" />
      </div>
    </nav>
  );
}

export default Navbar;
