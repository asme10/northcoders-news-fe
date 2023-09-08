import React, { useState } from "react";
import { voteArticle, voteComment } from "./../api";

const VoteArticle = ({ type, id, initialVotes }) => {
  const [votes, setVotes] = useState(initialVotes);
  const [voted, setVoted] = useState(null);

  const handleVote = (direction) => {
    if (voted === direction) {
      direction = "unvote";
      setVoted(null);
    } else {
    }

    if (type === "article") {
      voteArticle(id, direction)
        .then((updatedVotes) => {
          setVotes(updatedVotes);
        })
        .catch((err) => {
          console.error("Error voting on article:", err);
        });
    } else if (type === "comment") {
      voteComment(id, direction)
        .then((updatedVotes) => {
          setVotes(updatedVotes);
        })
        .catch((err) => {
          console.error("Error voting on comment:", err);
        });
    }
  };

  return (
    <div>
      <p>
        Votes: {votes}
        <button
          className={`btn btn-primary ms-2 ${voted === "up" ? "active" : ""}`}
          onClick={() => handleVote("up")}
        >
          Upvote
        </button>
        <button
          className={`btn btn-danger ms-2 ${voted === "down" ? "active" : ""}`}
          onClick={() => handleVote("down")}
        >
          Downvote
        </button>
      </p>
    </div>
  );
};

export default VoteArticle;
