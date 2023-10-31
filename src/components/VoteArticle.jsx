import React, { useState } from "react";
import { postVoteArticle } from "./../api";

const VoteArticle = ({ articleId, initialVotes, onVote }) => {
  const [votes, setVotes] = useState(initialVotes);
  const [isVoting, setIsVoting] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleVote = (voteType) => {
    if (isVoting) return;
    setIsVoting(true);

    postVoteArticle(articleId, voteType)
      .then((newVote) => {
        setVotes(newVote);
        setIsVoting(false);
        onVote(newVote);
      })
      .catch((error) => {
        setHasError(true);
        setIsVoting(false);
        console.error("Voting failed:", error);
      });
  };

  return (
    <div>
      {hasError && (
        <div className="alert alert-danger mx-5" role="alert">
          Voting failed. Please try again later.
        </div>
      )}

      <div className="likes" style={{ marginTop: "8px" }}>
        <button
          type="button"
          className="btn btn-outline-primary py-1 me-2 "
          onClick={() => handleVote("downvote")}
          disabled={isVoting}
        >
          <i className="fas fa-thumbs-down"></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-success py-1"
          onClick={() => handleVote("upvote")}
          disabled={isVoting}
        >
          <i className="fas fa-thumbs-up"></i>
        </button>
      </div>
    </div>
  );
};

export default VoteArticle;
