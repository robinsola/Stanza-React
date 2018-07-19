import { FETCH_POEMS } from '../actions/types';

const initialState = {
  results: [],
}

export default function(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}
