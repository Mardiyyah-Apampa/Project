import React from 'react';
import Hero from '../components/Hero';
import './Home.css';
import ActionButton from '../components/ActionButton';
import laptopIcon from '../assets/laptop.png';
import shoppingBagIcon from '../assets/shopping-bag.png';

function Home() {
  return (
    <div className="container">
      <Hero />

      <div className="card-grid">
        <ActionButton 
          to="/products"
          text="Go to Products"
          image={shoppingBagIcon}  
          color="navy"
        />

        <ActionButton 
          to="/sell"
          text="Sell on CampusCart"
          image={laptopIcon} 
          color="light"
        />

        
        
      </div>
    </div>
  );
}

export default Home;
