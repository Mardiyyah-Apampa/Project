// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">
          CAMPUS CART
        </Link>
      </div>

      <nav className="nav-links">
        <Link to="/shops">Shops</Link>
        <Link to="/products">Products</Link>
        <Link to="/learning">Learning</Link> {/* Linked to learning page */}
      </nav>

      <div className="header-right">
  <Link to="/cart" className="cart-link">
    🛒 Cart
  </Link>
  <Link to="/signup" className="signup-button">
    Sign Up
  </Link>
</div>

    </header>
  );
}

export default Header;
