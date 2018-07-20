import React from 'react';
import PoemList from './PoemList';
import Navbar from './Navbar';
import './searchForm.css';

function SearchForm() {
  let _author = null;
  let _theme = null;

  function handleSearch(e) {
    e.preventDefault();
  }

  return (
    <div>
      <Navbar />
      <div className='formStyles'>
        <h3>What's the Occasion?</h3>
        <form onSubmit={handleSearch}>
          <div className='radioGroup'>
            <label><input type='radio' name='radioInput' value='anniversary'/><span>Anniversary</span></label>
            <br />
            <label><input type='radio' name='radioInput' value='birthday'/><span>Birthday</span></label>
            <br />
            <label><input type='radio' name='radioInput' value='farewell'/><span>Breakup</span></label>
            <br />
            <label><input type='radio' name='radioInput' value='romance'/><span>Casual Hookup</span></label>
            <br />
            <label><input type='radio' name='radioInput' value='celebrate'/><span>Congratulations</span></label>
            <br />
            <label><input type='radio' name='radioInput' value='father'/><span>Father's Day</span></label>
            <br />
            <label><input type='radio' name='radioInput' value='death'/><span>Funeral</span></label>
            <br />
            <label><input type='radio' name='radioInput' value='fear'/><span>Halloween</span></label>
            <br />
            <label><input type='radio' name='radioInput' value='mother'/><span>Mother's Day</span></label>
            <br />
            <label><input type='radio' name='radioInput' value='spring'/><span>Spring</span></label>
            <br />
            <label><input type='radio' name='radioInput' value='thank'/><span>Thank You</span></label>
            <br />
            <label><input type='radio' name='radioInput' value='love'/><span>Wedding</span></label>
            <br />
            <label><input type='radio' name='radioInput' value='winter'/><span>Winter</span></label>
            <br />
          </div>
          <input type='text' id='author' placeholder='search by author' ref={(input)=>{_author = input;}}/><br />
          <input type='text' id='theme' placeholder='search by theme' ref={(input)=>{_theme = input;}}/><br />
          <button type='submit'>find poems</button>
        </form>
      </div>
      <PoemList />
    </div>
  );
}

export default SearchForm;
