import React, { useState } from 'react'; 
import { FrocksData } from "../FrocksData";
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const FrocksPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]); 

  const companyHandler = (mango) => {
    if (selectedProduct.includes(mango)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== mango));
    } else {
      setSelectedProduct([...selectedProduct, mango]);
    }
  };

  const filteredProduct = selectedProduct.length === 0
    ? FrocksData
    : FrocksData.filter((orange) => selectedProduct.includes(orange.company));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {FrocksData.map((Frocks) => {
            return (
              <div key={Frocks.id} className="pro-input">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(Frocks.company)}
                    onChange={() => companyHandler(Frocks.company)}
                  />
                  {Frocks.company}
                </label>
              </div>
            );
          })}
        </div>
        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/Frocks/${item.id}`}>
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

export default FrocksPage;