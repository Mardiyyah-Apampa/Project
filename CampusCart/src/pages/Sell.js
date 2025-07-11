import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sell.css';

function Sell() {
  const navigate = useNavigate();
  const isLoggedIn = false;

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/signup');
    }
  }, [isLoggedIn, navigate]);

  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    category: 'Books',
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const file = files[0];
      setForm({ ...form, image: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', form);
    alert('Product submitted!');
  };

  return (
    <div className="sell-container">
      <h1>List a Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Product Title
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Description
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Price (₦)
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Category
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option>Books</option>
            <option>Clothing</option>
            <option>Stationery</option>
            <option>Electronics</option>
          </select>
        </label>

        <label>
          Upload Image
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </label>

        {preview && (
          <div className="image-preview">
            <img src={preview} alt="Preview" />
          </div>
        )}

        <button type="submit">Submit Product</button>
      </form>
    </div>
  );
}

export default Sell;
