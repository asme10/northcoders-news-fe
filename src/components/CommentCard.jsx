import React from "react";

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <div className="comment-card" key={comment.comment_id}>
          <p>{comment.body}</p>
          <p>Author: {comment.author}</p>
          <p>Created At: {comment.created_at}</p>
          <p>Votes: {comment.votes}</p>
        </div>
      ))}
    </div>
  );    
};

export default CommentList;
