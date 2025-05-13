import React from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="homepage">
      <h1>Hi, I'm João</h1>
      <p>Here are some case studies</p>
      <ul>
        <li><Link to="/unbox">Unbox</Link></li>
        <li><Link to="/dnsmanager">DNS Manager</Link></li>
        <li><Link to="/freelance">Freelance</Link></li>
      </ul>
    </div>
  );
}

export default Homepage;