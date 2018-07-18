import React from 'react';
import { Link } from 'react-router-dom';

function Splash() {
  return (
    <div>
      <p>Logo splash page</p>
      <Link to="/searchform">SearchForm</Link>
    </div>
  );
}

export default Splash;
