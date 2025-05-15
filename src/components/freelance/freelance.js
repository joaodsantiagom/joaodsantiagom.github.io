import React from 'react';
import './freelance.scss';
import { Link } from 'react-router-dom';

function Freelance() {
  return (
    <div className="freelance">
      <h1>Freelance use case coming soon...</h1>
      <ul>
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/unbox">Unbox</Link></li>
        <li><Link to="/dnsmanager">DNS Manager</Link></li>
      </ul>
    </div>
  );
}

export default Freelance;