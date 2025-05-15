import React from 'react';

import './styles/app.scss';
import './styles/_variables.scss';
import './styles/_mixins.scss';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './components/homepage/homepage';
import PortfolioHome from './components/portfolio/portfoliohome/portfoliohome';
import Unbox from './components/portfolio/unbox/unbox';
import DNSManager from './components/portfolio/dnsmanager/dnsmanager';
import Freelance from './components/portfolio/freelance/freelance';

import logo from './logo.svg';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<PortfolioHome />} />
        <Route path="/portfolio/unbox" element={<Unbox />} />
        <Route path="/portfolio/dnsmanager" element={<DNSManager />} />
        <Route path="/portfolio/freelance" element={<Freelance />} />
      </Routes>
    </Router>
  );
}

export default App;
