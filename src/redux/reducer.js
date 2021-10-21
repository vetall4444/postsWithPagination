const initialState = {
  posts: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PHOTOS_LOADED": {
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
