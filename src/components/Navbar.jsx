import React from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/search_gray.png';
import shuffleIcon from '../assets/shuffle_gray.png';
import favsIcon from '../assets/fave_gray.png';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navStyles'>
      <Link to="/searchform"><img src={searchIcon}/></Link>
      <Link to="/"><img className='navDividers' src={shuffleIcon}/></Link>
      <Link to="/"><img src={favsIcon}/></Link>
    </div>
  );
}

export default Navbar;
