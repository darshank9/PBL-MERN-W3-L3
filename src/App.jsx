import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";
import "./styling/Navbar.css";

export default function App() {
  // Simple state to track which page is currently active ("home" or "shop")
  const [currentPage, setCurrentPage] = useState("home");

  return (
    // Wrap application in CartProvider so shopping cart data is accessible anywhere
    <CartProvider>
      <div className="app-wrapper">
        {/* Navigation Bar */}
        <header className="navbar">
          <div className="navbar-container">
            {/* Clicking logo navigates back to home page */}
            <div
              className="brand"
              onClick={() => setCurrentPage("home")}
              title="Go to Home Page"
            >
              <span className="brand-logo">🛍️</span>
              <span className="brand-name">ShopVibe</span>
            </div>

            {/* Navigation Tab Buttons */}
            <nav className="nav-links">
              <button
                className={`nav-btn ${currentPage === "home" ? "active" : ""}`}
                onClick={() => setCurrentPage("home")}
              >
                🏠 Home
              </button>
              <button
                className={`nav-btn ${currentPage === "shop" ? "active" : ""}`}
                onClick={() => setCurrentPage("shop")}
              >
                🛒 Shop Store
              </button>
            </nav>
          </div>
        </header>

        {/* Conditional Rendering: Display Home page OR Shop page depending on state */}
        {currentPage === "home" ? (
          <Home onNavigate={setCurrentPage} />
        ) : (
          /* Shop Store Page Layout */
          <div className="shop-page">
            <section className="shop-header">
              <h1>Explore Our Products</h1>
              <p>Filter by category or add your favorite items directly to the cart.</p>
            </section>

            <div className="main-content">
              <main className="products-section">
                <ProductList />
              </main>

              <aside className="cart-section">
                <Cart />
              </aside>
            </div>
          </div>
        )}
      </div>
    </CartProvider>
  );
}
