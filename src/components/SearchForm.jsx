import React from 'react';
import Navbar from './Navbar';
import './searchForm.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function SearchForm(props) {

  function onAuthorChange(e) {
    let {dispatch} = props;
    dispatch({type: 'SEARCH_AUTHOR', inputAuthor: e.target.value})
  }

  function onKeywordChange(e) {
    let {dispatch} = props;
    dispatch({type: 'SEARCH_KEYWORD', inputKeyword: e.target.value})
  }

  function onSearch(e) {
    let {dispatch} = props;
    let {inputAuthor} = props;
    let {inputKeyword} = props;
    fetch('https://cors-anywhere.herokuapp.com/' + `http://poetrydb.org/author,title/${inputAuthor};${inputKeyword}`)
      .then(response => response.json(),
        error => console.log('An error occurred.', error))
      .then(response => {
        dispatch({type: 'FETCH_POEMS', poems: response})
      })
  }

  return (
    <div>
      <Navbar />
      <div className='formStyles topPadding'>
        <form>
          <h3 className="title">pick a theme:</h3>
          <div className='radioGroup'>
            <label><input type='radio' value='anniversary' onChange={onKeywordChange} checked={props.inputKeyword === 'anniversary'}/><span>Anniversary</span></label>
            <br />
            <label><input type='radio' value='friend' onChange={onKeywordChange} checked={props.inputKeyword === 'friend'}/><span>Best Buds</span></label>
            <br />
            <label><input type='radio' value='bird' onChange={onKeywordChange} checked={props.inputKeyword === 'bird'}/><span>Bird Watching</span></label>
            <br />
            <label><input type='radio' value='farewell' onChange={onKeywordChange} checked={props.inputKeyword === 'farewell'}/><span>Breakup</span></label>
            <br />
            <label><input type='radio' value='romance' onChange={onKeywordChange} checked={props.inputKeyword === 'romance'}/><span>Casual Hookup</span></label>
            <br />
            <label><input type='radio' value='success' onChange={onKeywordChange} checked={props.inputKeyword === 'success'}/><span>Congratulations</span></label>
            <br />
            <label><input type='radio' value='father' onChange={onKeywordChange} checked={props.inputKeyword === 'father'}/><span>Fathers Day</span></label>
            <br />
            <label><input type='radio' value='death' onChange={onKeywordChange} checked={props.inputKeyword === 'death'}/><span>Funeral</span></label>
            <br />
            <label><input type='radio' value='nature' onChange={onKeywordChange} checked={props.inputKeyword === 'nature'}/><span>Get Outdoors</span></label>
            <br />
            <label><input type='radio' value='hope' onChange={onKeywordChange} checked={props.inputKeyword === 'hope'}/><span>Good Luck</span></label>
            <br />
            <label><input type='radio' value='sleep' onChange={onKeywordChange} checked={props.inputKeyword === 'sleep'}/><span>Good Night</span></label>
            <br />
            <label><input type='radio' value='fear' onChange={onKeywordChange} checked={props.inputKeyword === 'fear'}/><span>Halloween</span></label>
            <br />
            <label><input type='radio' value='birth' onChange={onKeywordChange} checked={props.inputKeyword === 'birth'}/><span>Happy Birthday</span></label>
            <br />
            <label><input type='radio' value='life' onChange={onKeywordChange} checked={props.inputKeyword === 'life'}/><span>Just Living Life</span></label>
            <br />
            <label><input type='radio' value='mother' onChange={onKeywordChange} checked={props.inputKeyword === 'mother'}/><span>Mothers Day</span></label>
            <br />
            <label><input type='radio' value='venge' onChange={onKeywordChange} checked={props.inputKeyword === 'venge'}/><span>Sorry Not Sorry</span></label>
            <br />
            <label><input type='radio' value='spring' onChange={onKeywordChange} checked={props.inputKeyword === 'spring'}/><span>Spring</span></label>
            <br />
            <label><input type='radio' value='thank' onChange={onKeywordChange} checked={props.inputKeyword === 'thank'}/><span>Thank You</span></label>
            <br />
            <label><input type='radio' value='love' onChange={onKeywordChange} checked={props.inputKeyword === 'love'}/><span>Wedding</span></label>
            <br />
            <label><input type='radio' value='winter' onChange={onKeywordChange} checked={props.inputKeyword === 'winter'}/><span>Winter</span></label>
            <br />
          </div>
          <h4 className="author">looking for a specific author?</h4>
          <input type='text' id='author' placeholder='|'onChange={onAuthorChange} value={props.inputAuthor} /><br />
          <Link to='/poemList'><button className='btn' onClick={onSearch}>find poems</button></Link>
        </form>
      </div>
    </div>
  );
}

export default connect()(SearchForm);
