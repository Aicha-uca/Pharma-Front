import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import City from './City';
import Header from './Header'; 
import Zone from './Zone';
import Login from './components/Login';
import Pharmacie from './Pharmacie';
import Garde from './components/Garde';
import Map from './Map';

function App() {
  return (
    <div className="App">
      <Router>
     <Header />
     <Routes>
     <Route  path='/Pharmacie' element={<Pharmacie />} />
       <Route  path='/City' element={<City />} />
       <Route  path='/Garde' element={<Garde />} />
       <Route  path='/Zone' element={<Zone />} />
       <Route  path='/Login' element={<Login />} />
       <Route  path='/Map' element={<Map />} />
     </Routes>
     </Router>
    </div>
  );
  }export default App;
