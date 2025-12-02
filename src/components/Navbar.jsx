import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from '../assets/logo.png';



function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Inner-Navbar">
        <Link to="/">
          <img src={logo} alt="Portfolio Logo" className="" />
        </Link>

        <div className="nav-links">
          <Link to="/" className="text-white hover:text-gray-300 mx-2">
          HOME
          </Link>
          <Link to="/About" className="text-white hover:text-gray-300 mx-2">
          ABOUT
          </Link>
          <Link to="/Project" className="text-white hover:text-gray-300 mx-2">
          PROJECT
          </Link>
          <Link to="/Contact" className="text-white hover:text-gray-300 mx-2">
          CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}export default Navbar;