import React, { useState } from 'react'; 
import { SareesData } from '../SareesData';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';


const SareesPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]); 

  const companyHandler = (mango) => {
    if (selectedProduct.includes(mango)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== mango));
    } else {
      setSelectedProduct([...selectedProduct, mango]);
    }
  };

  const filteredProduct = selectedProduct.length === 0
    ? SareesData
    : SareesData.filter((orange) => selectedProduct.includes(orange.company));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {SareesData.map((Sarees) => {
            return (
              <div key={Sarees.id} className="pro-input">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(Sarees.company)}
                    onChange={() => companyHandler(Sarees.company)}
                  />
                  {Sarees.company}
                </label>
              </div>
            );
          })}
        </div>
        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/Sarees/${item.id}`}>
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

export default SareesPage;