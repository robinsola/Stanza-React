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
      .then(response => {
        return response.json()
      })
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
            <label><input type='radio' value='birthday' onChange={onKeywordChange} checked={props.inputKeyword === 'birthday'}/><span>Birthday</span></label>
            <br />
            <label><input type='radio' value='farewell' onChange={onKeywordChange} checked={props.inputKeyword === 'farewell'}/><span>Breakup</span></label>
            <br />
            <label><input type='radio' value='romance' onChange={onKeywordChange} checked={props.inputKeyword === 'romance'}/><span>Casual Hookup</span></label>
            <br />
            <label><input type='radio' value='celebrate' onChange={onKeywordChange} checked={props.inputKeyword === 'celebrate'}/><span>Congratulations</span></label>
            <br />
            <label><input type='radio' value='father' onChange={onKeywordChange} checked={props.inputKeyword === 'father'}/><span>Fathers Day</span></label>
            <br />
            <label><input type='radio' value='death' onChange={onKeywordChange} checked={props.inputKeyword === 'death'}/><span>Funeral</span></label>
            <br />
            <label><input type='radio' value='fear' onChange={onKeywordChange} checked={props.inputKeyword === 'fear'}/><span>Halloween</span></label>
            <br />
            <label><input type='radio' value='mother' onChange={onKeywordChange} checked={props.inputKeyword === 'mother'}/><span>Mothers Day</span></label>
            <br />
            <label><input type='radio' value='spring' onChange={onKeywordChange} checked={props.inputKeyword === 'spring'}/><span>Spring</span></label>
            <br />
            <label><input type='radio' value='thank' onChange={onKeywordChange} checked={props.inputKeyword === 'thank'}/><span>Thank You</span></label>
            <br />
            <label><input type='radio' value='love' onChange={onKeywordChange} checked={props.inputKeyword === 'love'}/><span>Wedding</span></label>
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
