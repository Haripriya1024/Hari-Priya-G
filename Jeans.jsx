import React from 'react';
import { JeansData } from '../JeansData';

const Jeans = () => {
  return (
        <>
        <h2> Jeans </h2>
        <div className = "proSection">
          {
            JeansData.map((item) => {
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

export default Jeans;