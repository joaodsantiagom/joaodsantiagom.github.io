import React from 'react';

import './styles/app.scss';
import './styles/_variables.scss';
import './styles/_mixins.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/homepage';
import Unbox from './components/unbox/unbox';
import DNSmanager from './components/dnsmanager/dnsmanager';
import Freelance from './components/freelance/freelance';

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
