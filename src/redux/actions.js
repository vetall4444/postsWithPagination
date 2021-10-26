import PostServices from "../services/service-json";

const servicePosts = new PostServices();

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

const loadPosts = (currentPage) => {
  return (dispatch) => {
    servicePosts
      .getPosts(currentPage)
      .then((data) => {
        dispatch(setCountPage(data.count));
        return data.items;
      })
      .then((data) => dispatch(postsLoaded(data)));
  };
};

export { postsLoaded, changePage, setCountPage, loadPosts };
