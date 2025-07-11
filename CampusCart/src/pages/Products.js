import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './Products.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const dummyProducts = [
  { id: 1, name: "Calculus Textbook", category: "Books", price: 45, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Physics Lab Manual", category: "Books", price: 30, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Campus Hoodie", category: "Clothing", price: 50, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Stationery Kit", category: "Stationery", price: 20, image: "https://via.placeholder.com/150" },
];

function Products() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const { addToCart } = useContext(CartContext);

  const filtered = dummyProducts.filter(product => {
    const matchSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'All' || product.category === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="products-container">
      <h1 className="products-title">Browse Products</h1>

      <div className="products-search">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>All</option>
          <option>Books</option>
          <option>Clothing</option>
          <option>Stationery</option>
        </select>
      </div>

      <div className="products-grid">
        {filtered.length > 0 ? (
          filtered.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button
                onClick={() => {
                  addToCart(product);
                  toast.success(`${product.name} added to cart!`);
                }}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="no-results">No products found</p>
        )}
      </div>

      <ToastContainer position="top-right" autoClose={1500} />
    </div>
  );
}

export default Products;
