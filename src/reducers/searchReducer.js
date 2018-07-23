let initialState = {
  inputAuthor: '',
  inputKeyword: '',
  results: [],
};

const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SEARCH_KEYWORD':
      return {
        ...state,
        inputKeyword: action.inputKeyword
      }
    break;
    case 'FETCH_POEMS':
      return {
        ...state,
        results: action.results
      }
    default:
      return state;
  }
}

export default searchReducer;
