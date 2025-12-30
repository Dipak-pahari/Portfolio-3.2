import { useState } from 'react'
import React from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Project from './pages/Project.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar'
import ProjectDetail from './pages/ProjectDetail.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {
  return (
    <div>
    <Navbar />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/project/:projectId" element={<ProjectDetail />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App
