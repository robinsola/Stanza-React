import { FETCH_POEMS } from '../actions/types';

const initialState = {
  results: [],
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_POEMS:
      return {
        ...state,
        results: action.payload
      }
    default:
      return state;
  }
}
