import React from 'react';
import { Link } from 'react-router-dom';

function Error404(props) {
  return (  
   <div>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <h4><Link to ='/searchForm'>Take me back to the poetry!</Link></h4>
    </div>
  )
}

export default Error404;
