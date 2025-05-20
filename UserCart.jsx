import React from 'react';
import { useCart } from './CartContext';

const UserCart = () => {
  const { cartItems, removeFromCart } = useCart(); 

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-section">
            <div className="cart-img">
              <img src={item.image} alt={item.product || item.name} />
            </div>
            <div className="cart-details">
              <h3>{item.product || item.name}</h3>
              <h2>₹{item.price}</h2>
              <button
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default UserCart;