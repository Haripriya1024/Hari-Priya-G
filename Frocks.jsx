import React from 'react';
import { FrocksData } from '../FrocksData';

const Frocks = () => {
  return (
        <>
        <h2> Frocks</h2>
        <div className = "proSection">
          {
            FrocksData.map((item) => {
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

export default Frocks;