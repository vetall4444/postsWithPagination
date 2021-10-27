const initialState = {
  posts: [],
  currentPage: 5,
  countPage: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_PAGE": {
      return {
        ...state,
        currentPage: action.payload,
      };
    }
    case "SET_COUNT_PAGE": {
      return {
        ...state,
        countPage: action.payload,
      };
    }
    case "SET_CURRENT_PAGE": {
      return {
        ...state,
        currentPage: action.payload,
      };
    }
    case "POSTS_LOADED": {
      return {
        ...state,
        posts: action.payload,
      };
    }
    default:
      return state;
  }
};
export default reducer;
