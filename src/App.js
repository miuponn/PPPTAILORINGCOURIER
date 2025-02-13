import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EntryPage from './Pages/EntryPage/EntryPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<EntryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
