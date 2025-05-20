import React from 'react';
import { SareesData } from '../SareesData';

const Sarees = () => {
  return (
    <>
    <h2> Sarees </h2>
    <div className = "proSection">
      {
        SareesData.map((item) => {
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

export default Sarees;