import React from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/search_active.png';
import shuffleIcon from '../assets/shuffle_active.png';
import favsIcon from '../assets/favs_active.png';
import flatLogo from '../assets/flat_logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <div className='navStyles'>
        <Link to="/searchform"><img src={searchIcon}/></Link>
        <Link to="/"><img className='navDividers' src={shuffleIcon}/></Link>
        <Link to="/"><img src={favsIcon}/></Link>
      </div>
      <img className="flatLogo" src={flatLogo}/>
    </div>
  );
}

export default Navbar;
