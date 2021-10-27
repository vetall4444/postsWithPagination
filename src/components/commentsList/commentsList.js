import React, { useState, useEffect } from "react";
import PostServices from "../../services/service-json";
import Comment from "../comment/comment";
import Spinner from "../spinner/spinner";
import "./commentsList.css";

const servicePosts = new PostServices();

export default function CommentList(props) {
  const { id } = props;
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    servicePosts.getComments(id).then((data) => {
      setComments(data);
      setLoading(false);
    });
  }, [setComments, setLoading, id]);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="commentList">
      {comments.map((item, num) => (
        <Comment key={item.id} item={item} num={num + 1} />
      ))}
    </div>
  );
}
