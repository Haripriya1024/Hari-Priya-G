import React, { useContext } from 'react';
import { WishlistContext } from '../WishlistContext';

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div>
      <h2>Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="wishlistItems">
          {wishlistItems.map((item, index) => (
            <div key={index} className="wishlistItem">
              <img
                src={item.image}
                alt={item.product}
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
              />
              <div className="wishlistDetails">
                <h3>{item.company}</h3>
                <p>Product: {item.product}</p>
                <p>Price: ₹{item.price}</p>
                <p>{item.availability}</p>
                <button
                  onClick={() => removeFromWishlist(index)} // Remove from wishlist
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#FF0000',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
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

export default WishlistPage;