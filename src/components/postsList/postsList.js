import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Post from "../post/post";
import { postsLoaded, setCountPage } from "../../redux/actions";
import PostServices from "../../services/service-json";
import "./postList.css";

const servicePosts = new PostServices();

function PostList() {
  const posts = useSelector((state) => state.posts);
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    servicePosts
      .getPosts(currentPage)
      .then((data) => {
        dispatch(setCountPage(data.count));
        return data.items;
      })
      .then((data) => dispatch(postsLoaded(data)));
  }, [currentPage, dispatch]);

  return (
    <ul className="postList">
      {posts.map((post) => {
        return <Post post={post} key={post.id}></Post>;
      })}
    </ul>
  );
}
export default connect()(PostList);
