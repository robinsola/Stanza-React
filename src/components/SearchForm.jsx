import React from 'react';
import PoemList from './PoemList';

function SearchForm() {
  let _author = null;
  let _theme = null;

  function handleSearch(e) {
    e.preventDefault();
    console.log(_theme.value);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type='text' id='author' placeholder='search by author' ref={(input)=>{_author = input;}}/><br />
        <input type='text' id='theme' placeholder='search by theme' ref={(input)=>{_theme = input;}}/><br />
        <button type='submit'>find poems</button>
      </form>
      <p>Poem List:</p>
      <PoemList />
    </div>
  );
}

export default SearchForm;
