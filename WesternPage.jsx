import React, { useState } from 'react'; 
import { WesternData } from '../WesternData';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const WesternPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]); 

  const companyHandler = (mango) => {
    if (selectedProduct.includes(mango)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== mango));
    } else {
      setSelectedProduct([...selectedProduct, mango]);
    }
  };

  const filteredProduct = selectedProduct.length === 0
    ? WesternData
    : WesternData.filter((orange) => selectedProduct.includes(orange.company));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {WesternData.map((Western) => {
            return (
              <div key={Western.id} className="pro-input">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(Western.company)}
                    onChange={() => companyHandler(Western.company)}
                  />
                  {Western.company}
                </label>
              </div>
            );
          })}
        </div>
        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/Western/${item.id}`}>
                  <div className="pageImg">
                    <img src={item.image} alt={item.name} />
                  </div>
                </Link>
                <div className="proModel">
                  {item.company}, {item.price}, {item.model}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WesternPage;