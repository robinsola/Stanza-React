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
    fetch('https://cors-anywhere.herokuapp.com/' + `http://poetrydb.org/author,title/shakespeare;sonnet`)
      .then(response => {
        return response.json()
      })
      .then(response => {
        dispatch({type: 'FETCH_POEMS', poems: response})
      })
  }

  return (
    <div>
      <div className='navStyles'>
        <Link to="/searchform"><img src={searchIcon}/></Link>
        <Link to="/poemList"><img onClick={onRandomSearch} className='navDividers' src={shuffleIcon}/></Link>
        <Link to="/"><img src={favsIcon}/></Link>
      </div>
    </div>
  );
}

export default connect()(Navbar);
