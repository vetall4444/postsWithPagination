import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Post from "../post/post";
import { loadPosts } from "../../redux/actions";
import "./postList.css";

function PostList() {
  const posts = useSelector((state) => state.posts);
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts(currentPage));
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
