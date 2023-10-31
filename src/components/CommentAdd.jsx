import React, { useState } from "react";
import { postNewComment } from "../api";

const CommentAdd = ({ articleId, onCommentSubmit }) => {
  const [commentText, setCommentText] = useState("");
  const [username, setUsername] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (commentText.trim() === "") {
      return;
    }

    setIsSubmitting(true);

    postNewComment(articleId, commentText, username)
      .then((newComment) => {
        setIsSubmitting(false);
        setHasError(false);

        if (typeof onCommentSubmit === "function") {
          onCommentSubmit(newComment);
        }

        setCommentText("");
        setUsername("");
      })
      .catch((error) => {
        setIsSubmitting(false);
        setHasError(true);
        console.error("Error posting comment:", error);
      });
  };

  return (
    <div>
      {hasError && (
        <div className="alert alert-danger mx-5" role="alert">
          Error posting comment. Please try again later.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="mb-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="commentText" className="my-2">
            Add a Comment:
          </label>
          <textarea
            id="commentText"
            className="form-control"
            rows="3"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            disabled={isSubmitting}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-success my-3"
          disabled={isSubmitting}
          style={{ float: "right  " }}
        >
          {isSubmitting ? "Submitting..." : "Submit Comment"}
        </button>
      </form>
    </div>
  );
};

export default CommentAdd;
