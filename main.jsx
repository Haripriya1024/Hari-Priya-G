import React from 'react';
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';


ReactDom.createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <React.StrictMode>
    <CartProvider>
    <App />

    </CartProvider>
  </React.StrictMode>
</BrowserRouter>
);

