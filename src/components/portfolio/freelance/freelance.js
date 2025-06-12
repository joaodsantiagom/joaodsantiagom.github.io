import React from 'react';
import './freelance.scss';
import { Link } from 'react-router-dom';

function Freelance() {
     return (
          <div className='freelance'>
               <h1>Freelance use case coming soon...</h1>
               <ul>
                    <li>
                         <Link to='/portfolio'>Homepage</Link>
                    </li>
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

export default Freelance;
