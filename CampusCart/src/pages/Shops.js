import React, { useState } from 'react';
import './Shops.css'; // <- We will create this file next

// Dummy shop data
const shopList = [
  { id: 1, name: "BAP Bookstore", category: "Books", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Campus Tech", category: "Electronics", image: "https://via.placeholder.com/150" },
  { id: 3, name: "UniStyle", category: "Clothing", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Gourmet Grub", category: "Food", image: "https://via.placeholder.com/150" },
];

function Shops() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredShops = shopList.filter(shop =>
    shop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="shops-container">
      <h1 className="shops-title">Explore Shops</h1>

      <div className="shops-search">
        <input
          type="text"
          placeholder="Search shops..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="shops-grid">
        {filteredShops.length > 0 ? (
          filteredShops.map(shop => (
            <div key={shop.id} className="shop-card">
              <img src={shop.image} alt={shop.name} />
              <h2>{shop.name}</h2>
              <p>{shop.category}</p>
            </div>
          ))
        ) : (
          <p className="no-shops">No shops found 😞</p>
        )}
      </div>
    </div>
  );
}

export default Shops;
