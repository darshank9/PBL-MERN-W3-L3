import { useState } from "react";
import { products, categories } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductList() {

  const [selectedCategory, setSelectedCategory] = useState("All");

  const { cart, addItem } = useCart();

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <div className="product-list-container">

      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => {
          const cartItem = cart.find((item) => item.id === product.id);

          return (
            <div key={product.id} className="product-card">
              <div className="card-image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <span className="category-tag">{product.category}</span>
              </div>

              <div className="card-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>

                <div className="card-footer">
                  <span className="product-price">${product.price.toFixed(2)}</span>
                  <button
                    className={`add-btn ${cartItem ? "added" : ""}`}
                    onClick={() => addItem(product)}
                  >
                    {cartItem ? `In Cart (${cartItem.quantity})` : "+ Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
