import React, { useState } from "react";
import "./post.css";
import CommentList from "../commentsList/commentsList";
export default function Post(props) {
  const [isVisibleComments, setVisibleComments] = useState(false);
  const { id, body } = props.post;
  const toggleVisible = () => {
    setVisibleComments(!isVisibleComments);
  };
  let comments;
  if (isVisibleComments) {
    comments = <CommentList id={id} />;
  }
  return (
    <li key={id} className="post">
      <h2>{body}</h2>
      {comments}
      <div className="commentToggle" onClick={toggleVisible}>
        Отобразить/скрыть комментарии
      </div>
    </li>
  );
}
