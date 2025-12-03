import React from 'react';
import { Link, useLocation} from 'react-router-dom';
import './Navbar.scss';
import logo from '../assets/logo.svg';
import hamburger from '../assets/hamburger.png';
import cross from "../assets/cross.png"

//hamburger component
function Hamburger() {
  return(
    <div>
    <div className="hamburger-container">
          <img src={hamburger} alt="hamburger icon" />
    </div>

    <div className="cross-container">
    <img src={cross} alt="cross icon" />
    </div>
    </div>
  );
}


// Navigation text component
function Navtext({text, to}) {
  const location = useLocation();        // get current URL
  const isActive = location.pathname === to; // check if link matches
  return (
    <div className="Navtext-container">
      <Link to={to} className={`Navigation-Link ${isActive ? 'active' : ''}`}
      >
          {text}
          </Link>
      <div className="Navtext-underline">
      </div>
    </div>
  );
}

// Navbar component
function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Inner-Navbar">
        <Link to="/">
          <img src={logo} alt="Portfolio Logo" className="" />
        </Link>

        <Hamburger />

        <div className="nav-links">
          <Navtext text="HOME" to="/" />
          <Navtext text="ABOUT" to="/about" />
          <Navtext text="PROJECT" to="/project" />
          <Navtext text="CONTACT" to="/contact" />
        </div>
      </div>
    </nav>
    
  );
}

export default Navbar;