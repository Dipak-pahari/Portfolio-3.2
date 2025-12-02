import { useState } from 'react'
import React from 'react'
import viteLogo from '/vite.svg'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Project from './pages/Project.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App
