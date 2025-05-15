import React from 'react';
import './dnsmanager.scss';
import { Link } from 'react-router-dom';

function DNSmanager() {
  return (
    <div className="dnsmanager">
      <h1>DNS Manager use case coming soon...</h1>
      <ul>
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/unbox">Unbox</Link></li>
        <li><Link to="/freelance">Freelance</Link></li>
      </ul>
    </div>
  );
}

export default DNSmanager;