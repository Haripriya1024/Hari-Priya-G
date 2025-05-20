import React from 'react';
import { useParams } from 'react-router-dom';
import { SareesData } from '../SareesData';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';

const SareesSingle = () => {
  const { id } = useParams(); 
  const{ addToCart, CartItems} = useCart()


  const product = SareesData.find((item) => item.id === parseInt(id)); 

  console.log('ID from URL:', id);
  console.log('Product found:', product);
  return (
    <>
    <Navbar />
    <div className = "ind-section">
      <div className="ind-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className = "ind-details space">
        <div className="ind-company" >
            <h2> {product.company} </h2>
        </div>
      <div className="ind-model">
        <h2>{product.name}</h2>
     
        <h3>Price: ₹{product.price}</h3>
      </div>
      <div className = "ind-desc">
      <p>{product.description}</p>

      </div>
      <button onClick={() => addToCart({
        id: product.id,
        image: product.image, 
        name: product.name,
        price: product.price,
        company: product.company,
        description: product.description,})}>
        Add to cart</button>
      </div>
    </div>
    </>


    
  );
};

export default SareesSingle;