import React from 'react';
import { Link } from 'react-router-dom';
import './Splash.css';
import feather from '../assets/feather.png';
import inkWell from '../assets/logo2.png';
function Splash() {
  return (
    <div>
      <div>
        <img src={feather}/>
        <img src={inkWell}/>
      </div>
      <Link to="/searchform">find poems</Link>
    </div>
  );
}

export default Splash;
