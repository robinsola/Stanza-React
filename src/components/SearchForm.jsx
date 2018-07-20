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
            <label><input type='radio' name='radioInput' value='anniversary'/>Anniversary</label>
            <br />
            <label><input type='radio' name='radioInput' value='birthday'/>Birthday</label>
            <br />
            <label><input type='radio' name='radioInput' value='breakup'/>Breakup</label>
            <br />
            <label><input type='radio' name='radioInput' value='romance'/>Casual Hookup</label>
            <br />
            <label><input type='radio' name='radioInput' value='congratulations'/>Congratulations</label>
            <br />
            <label><input type='radio' name='radioInput' value='farewell'/>Farewell</label>
            <br />
            <label><input type='radio' name='radioInput' value='father'/>Father's Day</label>
            <br />
            <label><input type='radio' name='radioInput' value='halloween'/>Halloween</label>
            <br />
            <label><input type='radio' name='radioInput' value='mother'/>Mother's Day</label>
            <br />
            <label><input type='radio' name='radioInput' value='spring'/>Spring</label>
            <br />
            <label><input type='radio' name='radioInput' value='winter'/>Winter</label>
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
