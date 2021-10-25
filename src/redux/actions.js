const postsLoaded = (items) => {
  return {
    type: "POSTS_LOADED",
    payload: items,
  };
};
const changePage = (items) => {
  return {
    type: "CHANGE_PAGE",
    payload: items,
  };
};
const setCountPage = (items) => {
  return {
    type: "SET_COUNT_PAGE",
    payload: items,
  };
};

export { postsLoaded, changePage, setCountPage };
