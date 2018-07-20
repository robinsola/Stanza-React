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
        <form onSubmit={handleSearch}>
          <div className='radioGroup'>
            <label><input type='radio' name='radioInput' value='romance'/>Love</label>
            <br />
            <label><input type='radio' name='radioInput' value='death'/>Death</label>
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
