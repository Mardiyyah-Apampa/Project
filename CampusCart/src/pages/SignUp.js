// src/pages/SignUp.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    university: '',
    password: '',
    confirmPassword: '',
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!formData.acceptedTerms) {
      alert('You must accept the Terms and Conditions.');
      return;
    }
    console.log('Form submitted:', formData);
    // You can now send formData to backend
  };

  return (
    <div className="signup-container">
      <img src="/logo.png" alt="Campus Cart" className="signup-logo" />

      <h1 className="signup-title">Create Your Account</h1>
      <p className="signup-subtitle">Join us for a seamless shopping experience!</p>

      <form className="signup-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Phone Number</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>University</label>
        <select name="university" value={formData.university} onChange={handleChange} required>
          <option value="">Select University</option>
          <option value="University A">University A</option>
          <option value="University B">University B</option>
          <option value="University C">University C</option>
        </select>

        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />

        <div className="signup-terms">
          <input
            type="checkbox"
            name="acceptedTerms"
            checked={formData.acceptedTerms}
            onChange={handleChange}
          />
          <span>I accept the <Link to="/terms" className="terms-link">Terms and Conditions</Link> *</span>
        </div>

        <button type="submit" className="signup-button">
          ➕ Sign Up
        </button>

        <div className="signup-footer">
          <p>Already have an account? <Link to="/login" className="link">Login here</Link></p>
          <p>Want to be a shop owner? <Link to="/shop-owner-signup" className="link bold-link">Create a Shop Owner Account</Link></p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
