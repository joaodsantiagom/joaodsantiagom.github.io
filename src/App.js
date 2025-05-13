import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import Unbox from './components/unbox';
import DNSmanager from './components/dnsmanager';
import Freelance from './components/freelance';

import logo from './logo.svg';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/unbox" element={<Unbox />} />
        <Route path="/dnsmanager" element={<DNSmanager />} />
        <Route path="/freelance" element={<Freelance />} />
      </Routes>
    </Router>
  );
}

export default App;
