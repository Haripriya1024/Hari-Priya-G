import React, { useState } from 'react'; 
import { JeansData } from '../JeansData';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const JeansPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]); 

  const companyHandler = (mango) => {
    if (selectedProduct.includes(mango)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== mango));
    } else {
      setSelectedProduct([...selectedProduct, mango]);
    }
  };

  const filteredProduct = selectedProduct.length === 0
    ? JeansData
    : JeansData.filter((orange) => selectedProduct.includes(orange.company));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {JeansData.map((Jeans) => {
            return (
              <div key={Jeans.id} className="pro-input">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(Jeans.company)}
                    onChange={() => companyHandler(Jeans.company)}
                  />
                  {Jeans.company}
                </label>
              </div>
            );
          })}
        </div>
        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/Jeans/${item.id}`}>
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

export default JeansPage;