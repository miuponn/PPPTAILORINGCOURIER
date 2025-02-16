import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EntryPage from './Pages/EntryPage/EntryPage';
import HomePage from './Pages/HomePage/Homepage';
import ProductPage from './Pages/ProductPage/ProductPage';
import ProductItemPage from './Pages/ProductItemPage/ProductItemPage';
import PurchasePage from './Pages/PurchasePage/PurchasePage';
import ConfirmationPage from './Pages/ConfirmationPage/ConfirmationPage';
import TailoringPage from './Pages/TailoringPage/TailoringPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactLocationPage from './Pages/ContactLocationPage/ContactLocationPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route path="/home" element={<HomePage />}/>
          <Route path="/products" element={<ProductPage />}/>
          <Route path="/product/:id" element={<ProductItemPage />}/>
          <Route path="/product/:id/purchase" element={<PurchasePage />}/>
          <Route path="/confirmation" element={<ConfirmationPage />}/>
          <Route path="/services" element={<TailoringPage />}/>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact+location" element={<ContactLocationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 