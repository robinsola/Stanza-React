import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <p>navigation bar</p>
      <Link to="/">Splash</Link> | <Link to="/searchform">SearchForm</Link>
    </div>
  );
}

export default Navbar;
