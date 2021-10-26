import React, { memo } from "react";
import "./comment.css";
function Comment(props) {
  const { item } = props;
  return (
    <div className="comment">
      <h3>{item.name}</h3>
      <p>{item.body}</p>
    </div>
  );
}
export default memo(Comment);
