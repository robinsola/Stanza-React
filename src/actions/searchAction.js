import { FETCH_POEMS } from './types';

export function fetchPoems() {
  return function(dispatch) {
    console.log('I am working!');
    fetch('https://cors-anywhere.herokuapp.com/' + 'http://poetrydb.org/author,title/;hope')
    .then(response => response.json())
    .then(poemList => dispatch({
      type: FETCH_POEMS,
      payload: poemList
    }));
  }
}

//terms/results for title: celebrate/1, anniversary/4, birthday/17, farewell/39, romance/4, father/19, fear/10, mother/21, spring/51, winter/lots, wedding/2, funeral/13, death/lots, thank/5, love/lots, despair/4, hope/30
