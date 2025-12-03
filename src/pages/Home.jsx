import React from 'react';
import bgimg from '../assets/bg-img.png';

const Home = () => {
  return (
    <div className="Hero-banner-container">
      <img src={bgimg} alt="Dipak's Photo" />
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;