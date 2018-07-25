let initialState = {
  inputAuthor: '',
  inputKeyword: '',
  poems: [],
  selectedPoem: '',
  favorites: [],
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
    case 'SELECT_FAVORITE':
      return {
        ...state,
        selectedPoem: action.selectedPoem
      }
    break;
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.concat(action.selectedPoem)
      }
    default:
      return state;
  }
}

export default searchReducer;
