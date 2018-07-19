import { FETCH_POEMS } from './types';

export function fetchPoems() {
  return function(dispatch) {
    console.log('I am working!');
    fetch('https://cors-anywhere.herokuapp.com/' + 'http://poetrydb.org/author,title/dickinson;death')
    .then(response => response.json())
    .then(poemList => dispatch({
      type: FETCH_POEMS,
      payload: poemList
    }));
  }
}
