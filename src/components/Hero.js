import React from 'react';
import SearchBar from './SearchBar';
import heroImage1 from '../assets/hero-illustration1.png'; 
import heroImage2 from '../assets/hero-illustration2.png'; 

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
      <h1 className="hero-title">
        Your Marketplace for <br />
        <span className="highlight">Learning</span> and <span className="highlight">Earning</span>.
    </h1>

        <SearchBar />
      </div>

      <div className="hero-right">
        <div className="hero-images">
          <img src={heroImage1} alt="Student" className="hero-img" />
          <img src={heroImage2} alt="Books" className="hero-img second-img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
