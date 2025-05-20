import React from 'react';
import { WesternData } from '../WesternData';

const Western = () => {
  return (
        <>
        <h2> Western</h2>
        <div className = "proSection">
          {
            WesternData.map((item) => {
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

export default Western;
