import React from 'react';
import { useParams } from 'react-router-dom';
import { JeansData } from '../JeansData';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';

const JeansSingle = () => {
  const { id } = useParams(); 
  const { addToCart } = useCart();

  const product = JeansData.find((item) => item.id === parseInt(id)); 

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
      <Navbar />
      <div className="ind-section">
        <div className="ind-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="ind-details space">
          <div className="ind-company">
            <h2>{product.company}</h2>
          </div>
          <div className="ind-model">
            <h2>{product.name}</h2>
            <h3>Price: ₹{product.price}</h3>
          </div>
          <div className="ind-desc">
            <p>{product.description}</p>
          </div>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default JeansSingle;