import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <img src="/logo.png" alt="Campus Cart" className="login-logo" />

      <h1 className="login-title">Welcome Back!</h1>
      <p className="login-subtitle">Login to continue your journey 🚀</p>

      <form className="login-form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="login-button">
          🔒 Login
        </button>

        <div className="login-footer">
          <p>Don't have an account? <Link to="/signup" className="link">Sign Up</Link></p>
        </div>
      </form>
    </div>
  );
}

export default Login;
