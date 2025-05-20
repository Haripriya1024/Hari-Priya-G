import React from 'react';
import { ShirtsData } from '../ShirtsData';

const Shirts = () => {
  return (
       <>
       <h2> Shirts </h2>
       <div className = "proSection">
          {
            ShirtsData.map((item) => {
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

export default Shirts;
