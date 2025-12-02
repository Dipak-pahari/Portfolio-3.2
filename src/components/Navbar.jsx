import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center ">
      <Link to="/">
        <img src="/vite.svg" alt="Logo" className="h-8 w-8 inline-block mr-2" />
      </Link>

      <div>
        <Link to="/" className="text-white hover:text-gray-300 mx-2">
        HOME
        </Link>
        <Link to="/about" className="text-white hover:text-gray-300 mx-2">
        ABOUT
        </Link>
        <Link to="/project" className="text-white hover:text-gray-300 mx-2">
        PROJECT
        </Link>
        <Link to="/contact" className="text-white hover:text-gray-300 mx-2">
        CONTACT
        </Link>
      </div>
    </nav>
  );
}export default Navbar;