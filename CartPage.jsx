import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart(); 

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cartItems">
          {cartItems.map((item, index) => (
            <div key={index} className="cartItem">
              <div className="cart-img">
                <img
                  src={item.image}
                  alt={item.name || item.product}
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
              </div>
              <div className="cartDetails">
                <h3>{item.company}</h3>
                <p>Product: {item.name || item.product}</p>
                <p>Price: ₹{item.price}</p>
                <button
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;