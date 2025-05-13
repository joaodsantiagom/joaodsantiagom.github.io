import React from 'react';
import './freelance.css';
import { Link } from 'react-router-dom';

function Freelance() {
  return (
    <div className="freelance">
      <h1>Freelance use case</h1>
      <ul>
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/unbox">Unbox</Link></li>
        <li><Link to="/dnsmanager">DNS Manager</Link></li>
      </ul>
    </div>
  );
}

export default Freelance;