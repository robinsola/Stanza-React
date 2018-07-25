let initialState = {
  inputAuthor: '',
  inputKeyword: '',
  poems: [],
  randoms: [],
};

const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SEARCH_AUTHOR':
      return {
        ...state,
        inputAuthor: action.inputAuthor
      };
    case 'SEARCH_KEYWORD':
      return {
        ...state,
        inputKeyword: action.inputKeyword
      };
    case 'FETCH_POEMS':
      return {
        ...state,
        poems: action.poems
      };
    case 'FETCH_RANDOM':
      return {
        ...state,
        randoms: action.randoms
      }
    default:
      return state;
  }
}

export default searchReducer;
