import React from 'react';
import { Link } from 'react-router-dom';
import './Splash.css';
import feather from '../assets/feather.png';
import inkWell from '../assets/logo2.png';
function Splash() {
  const linkStyles = {
    textDecoration: 'none',
    color: 'white'
  };
  return (
    <div className='splashContainer'>
      <div className='logoStyles'>
        <div className='feather'>
          <img src={feather}/>
        </div>
        <div className='inkWell'>
          <img src={inkWell}/>
        </div>
        <Link className='enterBtn' style={linkStyles} to="/searchform">find poems</Link>
      </div>
    </div>
  );
}

export default Splash;
