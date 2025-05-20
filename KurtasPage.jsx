import React, { useState } from 'react'; 
import { KurtasData } from '../KurtasData';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const KurtasPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]); 

  const companyHandler = (mango) => {
    if (selectedProduct.includes(mango)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== mango));
    } else {
      setSelectedProduct([...selectedProduct,mango]);
    }
  };
  const filteredProduct = selectedProduct.length===0?
  KurtasData : KurtasData.filter((orange) => selectedProduct.includes(orange.company))




  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {KurtasData.map((Kurtas) => {
            return (
              <div key={Kurtas.id} className="pro-input">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(Kurtas.company)}
                    onChange={() => companyHandler(Kurtas.company)}
                  />
                  {Kurtas.company}
                </label>
              </div>
            );
          })}
        </div>
        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/Kurtas/${item.id}`}>
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

export default KurtasPage;