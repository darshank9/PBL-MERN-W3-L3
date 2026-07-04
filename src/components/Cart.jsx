import { useCart } from "../context/CartContext";

export default function Cart() {

  const { cart, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCart();

  return (
    <div className="cart-sidebar">
      <div className="cart-header">
        <h2>🛒 Shopping Cart</h2>
        <span className="cart-badge">{totalItems} {totalItems === 1 ? "item" : "items"}</span>
      </div>

      {cart.length === 0 ? (

        <div className="empty-cart-state">
          <span className="empty-emoji">🛍️</span>
          <p className="empty-title">Your cart is empty</p>
          <p className="empty-subtitle">Select products from the left to add them here.</p>
        </div>
      ) : (
        <>
   
          <div className="cart-items-list">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />

                <div className="cart-item-details">
                  <h4 className="cart-item-name">{item.name}</h4>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>

                
                  <div className="qty-controls">
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      −
                    </button>
                    <span className="qty-number">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Subtotal and delete button */}
                <div className="cart-item-actions">
                  <span className="item-subtotal">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                    title="Remove item"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary & Checkout */}
          <div className="cart-footer">
            <div className="summary-row">
              <span>Total Amount:</span>
              <span className="total-price-amount">${totalPrice.toFixed(2)}</span>
            </div>

            <button
              className="checkout-btn"
              onClick={() => {
                alert(`🎉 Order placed successfully!\nTotal paid: $${totalPrice.toFixed(2)}\nThank you for shopping!`);
                clearCart();
              }}
            >
              Proceed to Checkout →
            </button>

            <button className="clear-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
