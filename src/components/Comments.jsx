import React from "react";

const Comments = ({ comments }) => {
  return (
    <>
      <h2 className="px-5">Comments</h2>
      <ul className="list-group list-group-flush">
        {comments.map((comment) => (
          <li className="list-group-item px-5" key={comment.comment_id}>
            <p>
              <strong>{comment.author}:</strong>
            </p>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Comments;
