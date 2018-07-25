let initialState = {
  inputAuthor: '',
  inputKeyword: '',
  poems: [],
};

const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SEARCH_AUTHOR':
      return {
        ...state,
        inputAuthor: action.inputAuthor
      }
    break;
    case 'SEARCH_KEYWORD':
      return {
        ...state,
        inputKeyword: action.inputKeyword
      }
    break;
    case 'FETCH_POEMS':
      return {
        ...state,
        poems: action.poems
      }
    break;
    case 'FETCH_RANDOM':
      return {
        ...state,
        poems: action.poems
      }
    default:
      return state;
  }
}

export default searchReducer;
