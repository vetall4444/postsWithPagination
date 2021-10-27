import React, { memo } from "react";
import "./comment.css";
function Comment(props) {
  const { item, num } = props;
  return (
    <div className="comment">
      <h3>
        {num}){item.name}
      </h3>
      <p>{item.body}</p>
    </div>
  );
}
export default memo(Comment);
