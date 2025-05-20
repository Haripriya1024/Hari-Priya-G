
import React from 'react';
import { KurtasData } from '../KurtasData';

const Kurtas = () => {
  return (
      <>
      <h2> Kurtas </h2>
      <div className = "proSection">
        {
          KurtasData.map((item) => {
            return(
              <div className = "imgBox">
                <img className = "proImage" src={item.image} alt= "" />
                <p className="proPrice">Price: ₹{item.price}</p>
              </div>
            )
          
          })
        }
      </div>
      </>
    );
};

export default Kurtas;
