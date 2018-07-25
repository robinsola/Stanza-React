import React from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/search_active.png';
import shuffleIcon from '../assets/shuffle_active.png';
import favsIcon from '../assets/favs_active.png';
import './Navbar.css';
import {connect} from 'react-redux';

function Navbar(props) {

  // function random(poems) {
  //   return poems[Math.floor(Math.random()*poems.length)];
  // }

  function onRandomSearch(e) {
    let {dispatch} = props;
    fetch('https://cors-anywhere.herokuapp.com/' + 'https://www.poemist.com/api/v1/randompoems')
      .then(response => {
        return response.json()
      })
      .then(response => {
        dispatch({type: 'FETCH_RANDOM', randoms: response})
      })
  }

  return (
    <div>
      <div className='navStyles'>
        <Link to="/searchform"><img src={searchIcon}/></Link>
        <Link to="/randomList"><img onClick={onRandomSearch} className='navDividers' src={shuffleIcon}/></Link>
        <Link to="/"><img src={favsIcon}/></Link>
      </div>
    </div>
  );
}

export default connect()(Navbar);
