import React from 'react';
import "./About.scss";

const About = () => {
  return (
    <div className="project-detail-container">

      {/* Header Info */}
      <section className="project-header">
        <h1 className="project-title">Revolution Café Redesign</h1>
        <p className="project-subtitle">UX/UI Case Study • 2025</p>

        <div className="project-meta">
          <div>
            <h4>Role</h4>
            <p>UX/UI Designer</p>
          </div>

          <div>
            <h4>Tools</h4>
            <p>Figma • Photoshop</p>
          </div>

          <div>
            <h4>Timeline</h4>
            <p>2 Weeks</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="project-section">
        <h2>Overview</h2>
        <p>
          Revolution Café lacked a structured website for users to browse menu items,
          explore the brand, and place online orders. The goal was to redesign the
          experience to be modern, clean, and easy to navigate.
        </p>
      </section>

      {/* Problem Section */}
      <section className="project-section">
        <h2>The Problem</h2>
        <p>
          Users struggled to find menu items quickly, the UI felt outdated,
          and the site lacked consistent spacing and visual hierarchy.
        </p>
      </section>

      {/* Goal Section */}
      <section className="project-section">
        <h2>Project Goal</h2>
        <p>
          Create a friendly and modern café experience with improved
          readability, clean spacing, and smoother user flow.
        </p>
      </section>

      {/* Process Section */}
      <section className="project-section">
        <h2>Design Process</h2>
        <ul className="process-list">
          <li>User Research</li>
          <li>Wireframes</li>
          <li>High Fidelity Design</li>
          <li>Prototype</li>
        </ul>
      </section>

      {/* Images Section */}
      <section className="project-section">
        <h2>Final Designs</h2>
        <div className="image-grid">
          <img src="/sample1.png" alt="screen 1" />
          <img src="/sample2.png" alt="screen 2" />
          <img src="/sample3.png" alt="screen 3" />
        </div>
      </section>

      {/* Outcomes */}
      <section className="project-section">
        <h2>Outcome</h2>
        <p>
          The redesign improved visual clarity, reduced cognitive load,
          and created a more welcoming online café experience.
        </p>
      </section>

      {/* CTA */}
      <section className="project-section">
        <a href="#" className="view-prototype-btn">View Prototype</a>
      </section>

    </div>
  );
};

export default About;
