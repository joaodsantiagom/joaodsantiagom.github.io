import React from 'react';
import './homepage.scss';
import profilePhoto from './assets/profile.jpg';

function Homepage() {
     return (
          <div className='homepage'>
               <div className='intro'>
                    <div className='photo-container'>
                         <img className='photo' src={profilePhoto} alt='João Santiago' />
                         <div className='wave'></div>
                    </div>
                    <h2 className='title'>João Santiago</h2>
                    <p className='text'>
                         UX designer with 10+ years of experience building web products.
                         Open to new projects, reach out if you'd like to see my work.
                    </p>
                    <ul className='contacts'>
                         <li><a className='contact email' href='mailto:joaodsantiagom@gmail.com'>Email me</a></li>
                         <li><a className='contact linkedin' href='https://www.linkedin.com/in/joao-santiago/' target='_blank' rel='noreferrer'>Connect on LinkedIn</a></li>
                         <li><span className='contact pin'>Aveiro, Portugal</span></li>
                    </ul>
               </div>
          </div>
     );
}

export default Homepage;
