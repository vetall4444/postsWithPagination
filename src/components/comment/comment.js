import React from "react";
import "./comment.css";
export default function Comment(props) {
  const { item } = props;
  return (
    <div className="comment">
      <h3>{item.name}</h3>
      <p>{item.body}</p>
    </div>
  );
}
