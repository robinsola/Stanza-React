import React from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/search_gray.png';
import shuffleIcon from '../assets/shuffle_gray.png';
import favsIcon from '../assets/fave_gray.png';

function Navbar() {
  return (
    <div>
      <p>navigation bar</p>
      <Link to="/">Splash</Link>
      <Link to="/searchform"><img src={searchIcon}/></Link>
      <Link to="/shufflepoem"><img src={shuffleIcon}/></Link>
      <Link to="/favorites"><img src={favsIcon}/></Link>
    </div>
  );
}

export default Navbar;
