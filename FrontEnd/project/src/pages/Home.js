import React, { useState } from 'react';
import Navbar from '../componants/Navbar';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const categories = [
  { icon: '🥦', name: 'Vegetables' },
  { icon: '🍎', name: 'Fruits' },
  { icon: '🥛', name: 'Dairy' },
  { icon: '🍞', name: 'Bakery' },
  { icon: '🍗', name: 'Meat' },
  { icon: '🧃', name: 'Beverages' },
  { icon: '🧹', name: 'Cleaning' },
  { icon: '🛁', name: 'Personal Care' },
];

const stores = [
  { id: 1, name: 'Fresh Mart', category: 'Supermarket', rating: 4.5, time: '20-30 min', image: '🏪' },
  { id: 2, name: 'Green Basket', category: 'Organic', rating: 4.8, time: '15-25 min', image: '🛒' },
  { id: 3, name: 'Daily Needs', category: 'Kirana', rating: 4.2, time: '10-20 min', image: '🏬' },
  { id: 4, name: 'Super Bazaar', category: 'Supermarket', rating: 4.6, time: '25-35 min', image: '🏦' },
  { id: 5, name: 'Organic Hub', category: 'Organic', rating: 4.9, time: '20-30 min', image: '🌿' },
  { id: 6, name: 'Quick Stop', category: 'Kirana', rating: 4.1, time: '5-15 min', image: '⚡' },
];

const Home = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const filteredStores = stores.filter(store =>
    store.name.toLowerCase().includes(search.toLowerCase()) &&
    (selectedCategory === '' || store.category === selectedCategory)
  );

  return (
    <div className="home-container">
      <Navbar />

      {/* Hero Section */}
      <div className="hero-section">
        <h1>🛒 Fresh Groceries Delivered Fast!</h1>
        <p>Order from your nearest stores in 30 minutes</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Search stores or products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Categories */}
      <div className="section">
        <h2>📦 Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`category-card ${selectedCategory === cat.name ? 'active' : ''}`}
              onClick={() => setSelectedCategory(
                selectedCategory === cat.name ? '' : cat.name
              )}
            >
              <span className="cat-icon">{cat.icon}</span>
              <span className="cat-name">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stores */}
      <div className="section">
        <h2>🏪 Nearby Stores</h2>
        <div className="stores-grid">
          {filteredStores.map(store => (
            <div
              key={store.id}
              className="store-card"
              onClick={() => navigate(`/store/${store.id}`)}
            >
              <div className="store-image">{store.image}</div>
              <div className="store-info">
                <h3>{store.name}</h3>
                <p className="store-category">{store.category}</p>
                <div className="store-meta">
                  <span>⭐ {store.rating}</span>
                  <span>🕐 {store.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredStores.length === 0 && (
          <p className="no-results">😕 No stores found. Try a different search!</p>
        )}
      </div>
    </div>
  );
};

export default Home;