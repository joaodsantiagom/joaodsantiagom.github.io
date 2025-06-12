import React from 'react';
import './porfoliohome.scss';
import { Link } from 'react-router-dom';

function PorfolioHome() {
     return (
          <div className='porfolio-home'>
               <h1>Hi, I'm João</h1>
               <p>More soon</p>
               <ul>
                    <li>
                         <Link to='/portfolio/unbox'>Unbox</Link>
                    </li>
                    <li>
                         <Link to='/portfolio/dnsmanager'>DNS Manager</Link>
                    </li>
                    <li>
                         <Link to='/portfolio/freelance'>Freelance</Link>
                    </li>
               </ul>
          </div>
     );
}

export default PorfolioHome;
