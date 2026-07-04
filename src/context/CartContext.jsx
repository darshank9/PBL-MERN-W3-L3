import { createContext, useContext, useState, useEffect } from "react";

// 1. Create Context to share cart state globally without passing props down multiple levels
const CartContext = createContext(null);

export function CartProvider({ children }) {
  // 2. Initialize cart state from local storage (or empty array if none saved)
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("shopvibe_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 3. Save cart to local storage automatically whenever the cart items change
  useEffect(() => {
    localStorage.setItem("shopvibe_cart", JSON.stringify(cart));
  }, [cart]);

  // Add product to cart (if already inside, just increase quantity by 1)
  const addItem = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // Increase quantity of existing item
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item with initial quantity of 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove product completely from cart by its ID
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Update specific item quantity (increase or decrease)
  const updateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      // If quantity becomes 0 or less, remove item from cart
      removeItem(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  // Clear all items from cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate total number of items currently in cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Calculate total price of all items
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook so any component can access the cart easily: const { cart, addItem } = useCart();
export function useCart() {
  return useContext(CartContext);
}
