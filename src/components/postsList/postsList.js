import React, { useEffect } from "react";
import { connect } from "react-redux";
import Post from "../post/post";
import { postsLoaded, changePage, setCountPage } from "../../redux/actions";
import PostServices from "../../services/service-json";
import "./postList.css";
const servicePosts = new PostServices();

function PostList(props) {
  const { posts, currentPage, postsLoaded, setCountPage } = props;
  useEffect(() => {
    servicePosts.getPosts(currentPage).then((data) => {
      postsLoaded(data);
      setCountPage(data.length);
    });
  }, [postsLoaded, currentPage, setCountPage]);

  return (
    <ul className="postList">
      {posts.map((post) => {
        return <Post post={post} key={post.id}></Post>;
      })}
    </ul>
  );
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    currentPage: state.currentPage,
  };
};
const mapDispatchToProps = { postsLoaded, changePage, setCountPage };
export default connect(mapStateToProps, mapDispatchToProps)(PostList);
