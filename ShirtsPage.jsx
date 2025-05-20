import React, { useState } from 'react'; 
import { ShirtsData } from '../ShirtsData';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const ShirtsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]); 

  const companyHandler = (mango) => {
    if (selectedProduct.includes(mango)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== mango));
    } else {
      setSelectedProduct([...selectedProduct, mango]);
    }
  };

  const filteredProduct = selectedProduct.length === 0
    ? ShirtsData
    : ShirtsData.filter((orange) => selectedProduct.includes(orange.company));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {ShirtsData.map((Shirts) => {
            return (
              <div key={Shirts.id} className="pro-input">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(Shirts.company)}
                    onChange={() => companyHandler(Shirts.company)}
                  />
                  {Shirts.company}
                </label>
              </div>
            );
          })}
        </div>
        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/Shirts/${item.id}`}>
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

export default ShirtsPage;