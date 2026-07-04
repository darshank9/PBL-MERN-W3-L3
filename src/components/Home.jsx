import React from "react";
import "../styling/home.css"

export default function Home({ onNavigate }) {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="hero-text-box">
          <span className="hero-badge">✨ New Collection Available</span>
          <h1 className="hero-title">Upgrade Your Lifestyle with Premium Products</h1>
          <p className="hero-subtitle">
            Discover our curated collection of electronics, trendy fashion, home decor, and sports gear. Quality guaranteed at unbeatable prices.
          </p>
          <button
            className="explore-btn"
            onClick={() => onNavigate("shop")}
          >
            Explore Shop Now →
          </button>
        </div>
      </section>

      
      <section className="features-section">
        <h2 className="section-title">Why Choose ShopVibe?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🚚</span>
            <h3>Free Fast Shipping</h3>
            <p>Enjoy quick doorstep delivery on all orders over $50.</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🛡️</span>
            <h3>Premium Quality</h3>
            <p>Every single product is handpicked and verified for excellence.</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">💳</span>
            <h3>100% Secure Checkout</h3>
            <p>Safe and encrypted payment gateways for peace of mind.</p>
          </div>
        </div>
      </section>

      {/* Categories Preview Section */}
      <section className="categories-preview">
        <h2 className="section-title">Browse Our Top Categories</h2>
        <div className="categories-grid">
          <div className="cat-card" onClick={() => onNavigate("shop")}>
            <span className="cat-emoji">⚡</span>
            <h4>Electronics</h4>
            <p>Smartwatches, Headphones & Audio</p>
          </div>

          <div className="cat-card" onClick={() => onNavigate("shop")}>
            <span className="cat-emoji">👗</span>
            <h4>Fashion</h4>
            <p>Denim Jackets, Footwear & Apparel</p>
          </div>

          <div className="cat-card" onClick={() => onNavigate("shop")}>
            <span className="cat-emoji">🏠</span>
            <h4>Home & Living</h4>
            <p>LED Lamps, Planters & Decor</p>
          </div>

          <div className="cat-card" onClick={() => onNavigate("shop")}>
            <span className="cat-emoji">🏋️</span>
            <h4>Sports & Fitness</h4>
            <p>Yoga Mats, Activewear & Gear</p>
          </div>
        </div>
      </section>
    </div>
  );
}
