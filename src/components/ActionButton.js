
import React from 'react';
import { Link } from 'react-router-dom';

function ActionButton({ icon, text, to, image, color = "blue", className = "" }) {
  const colorClasses = {
    blue: "action-btn-blue",
    navy: "action-btn-navy",
    light: "action-btn-light"
  };

  return (
    <Link to={to} className={`action-button ${colorClasses[color]} ${className}`}>
      {image && (
        <img src={image} alt="" className="action-image" />
      )}
      <span>{text}</span>
    </Link>
  );
}

export default ActionButton;
