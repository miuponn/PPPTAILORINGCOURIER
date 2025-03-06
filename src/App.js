import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
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
import ChatWidget from './components/ChatWidget/ChatWidget';

const AppContent = () => {
  const location = useLocation();
  const isEntryPage = location.pathname === "/";
  
  return (
    <>
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
        
        {/* routes for ChatModal */}
        <Route path="/kit" element={<HomePage />} />
        <Route path="/home/kit" element={<HomePage />} />
        <Route path="/products/kit" element={<ProductPage />} />
        <Route path="/product/:id/kit" element={<ProductItemPage />} />
        <Route path="/services/kit" element={<TailoringPage />} />
        <Route path="/about/kit" element={<AboutPage />} />
        <Route path="/contact+location/kit" element={<ContactLocationPage />} />
        <Route path="/profile/kit" element={<ProfilePage />} />
      </Routes>
      {!isEntryPage && <ChatWidget />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
