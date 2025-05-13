import React from 'react';
import './unbox.css';
import { Link } from 'react-router-dom';

function Unbox() {
  return (
    <div className="unbox">
      <h1>Unbox use case</h1>
      <ul>
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/dnsmanager">DNS Manager</Link></li>
        <li><Link to="/freelance">Freelance</Link></li>
      </ul>
    </div>
  );
}

export default Unbox;