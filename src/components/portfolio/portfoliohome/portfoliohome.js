import React from 'react';
import './porfoliohome.scss';
import { Link } from 'react-router-dom';

function PorfolioHome() {
  return (
    <div className="porfolio-home">
      <h1>Hi, I'm João</h1>
      <p>Here are some of my use case studies soon:</p>
      <ul>
        <li><Link to="/unbox">Unbox</Link></li>
        <li><Link to="/dnsmanager">DNS Manager</Link></li>
        <li><Link to="/freelance">Freelance</Link></li>
      </ul>
    </div>
  );
}

export default PorfolioHome;