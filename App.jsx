import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage';
import SareesPage from './Pages/SareesPage';
import SareesSingle from './Singles/SareesSingle';
import KurtasSingle from './Singles/KurtasSingle';
import ShirtsSingle from './Singles/ShirtsSingle';
import JeansSingle from './Singles/JeansSingle';
import FrocksSingle from './Singles/FrocksSingle';
import WesternSingle from './Singles/WesternSingle';
import KurtasPage from './Pages/KurtasPage';
import FrocksPage from './Pages/FrocksPage';
import JeansPage from './Pages/JeansPage';
import ShirtsPage from './Pages/ShirtsPage';
import WesternPage from './Pages/WesternPage';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import CartPage from './Pages/CartPage';

const App = () => {
  return (
    <div>
      <CartProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Sarees" element={<SareesPage />} />
            <Route path="/Sarees/:id" element={<SareesSingle />} />
            <Route path="/Kurtas" element={<KurtasPage />} />
            <Route path="/Kurtas/:id" element={<KurtasSingle />} />
            <Route path="/Frocks" element={<FrocksPage />} />
            <Route path="/Frocks/:id" element={<FrocksSingle />} />
            <Route path="/Jeans" element={<JeansPage />} />
            <Route path="/Jeans/:id" element={<JeansSingle />} />
            <Route path="/Shirts" element={<ShirtsPage />} />
            <Route path="/Shirts/:id" element={<ShirtsSingle />} />
            <Route path="/Western" element={<WesternPage />} />
            <Route path="/Western/:id" element={<WesternSingle />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </AuthProvider>
      </CartProvider>
    </div>
  );
};

export default App;