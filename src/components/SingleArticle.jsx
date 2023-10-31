import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CommentAdd from "./CommentAdd";
import { getArticleById, getCommentsByArticleId } from "./../api";
import VoteArticle from "./VoteArticle";

const SingleArticle = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [viewAllComments, setViewAllComments] = useState(false);
  const [isCommentAddVisible, setIsCommentAddVisible] = useState(false);

  useEffect(() => {
    getArticleById(articleId)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
        if (article) {
          getCommentsByArticleId(article.article_id).then((comments) => {
            setComments(comments);
          });
        }
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [articleId]);

  const handleVote = (newVote) => {
    setArticle((prevArticle) => ({
      ...prevArticle,
      votes: newVote,
    }));
  };

  const handleNewComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  const toggleViewAllComments = () => {
    setViewAllComments(!viewAllComments);
  };

  const toggleAddComment = () => {
    setIsCommentAddVisible(!isCommentAddVisible);
  };

  const displayedComments = viewAllComments ? comments : comments.slice(0, 1);

  if (isLoading) {
    return (
      <div className="alert alert-success mx-5" role="alert">
        Loading...
      </div>
    );
  } else if (isError) {
    return (
      <div className="alert alert-danger mx-5" role="alert">
        Error: Failed to load article. Please try again later.
      </div>
    );
  }

  return (
    <section>
      <div
        className="card border-top"
        style={{
          maxWidth: "50rem",
          margin: "6rem auto",
        }}
      >
        <img
          src={article.article_img_url}
          alt={article.topic}
          style={{
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        />
        <div className="card-body">
          <div className="d-flex mb-3">
            <img
              src={article.article_img_url}
              alt={article.topic}
              className="border rounded-circle me-3"
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
            />
            <div>
              <strong>{article.author}</strong> <br />
              <small>{new Date(article.created_at).toLocaleDateString()}</small>
            </div>
          </div>
          <div>
            <p>{article.body}</p>
          </div>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between mb-3">
            <div>
              <i className="fas fa-thumbs-up text-primary me-3"></i>
              <i className="fas fa-heart text-danger me-3"></i>
              <span style={{ color: "blue" }}>{article.votes}</span>
            </div>
            <div>
              <p> {article.comment_count} comments</p>
            </div>
          </div>

          <div className="d-flex justify-content-between text-center border-top border-bottom mb-4">
            <VoteArticle
              articleId={article.article_id}
              initialVotes={article.votes}
              onVote={handleVote}
            />

            <button
              type="button"
              className="btn btn-lg"
              style={{ color: "blue" }}
              onClick={toggleAddComment}
            >
              <i className="fas fa-comment-alt me-2"></i>Comment
            </button>
            <button
              type="button"
              className="btn btn-lg"
              style={{ color: "blue" }}
            >
              <i className="fas fa-share me-2"></i>Share
            </button>
          </div>

          {displayedComments.map((comment) => (
            <div className="d-flex" key={comment.comment_id}>
              <img
                src={article.article_img_url}
                alt={article.topic}
                className="border rounded-circle me-3"
                style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              />
              <div>
                <p className="text-dark mb-0">
                  <strong>{comment.author}</strong>
                </p>
                <p className="text-muted d-block">
                  <small>{comment.body}</small>
                </p>
              </div>
            </div>
          ))}
          {comments.length > 1 && (
            <button
              className="btn btn-outline-primary py-1 mb-2"
              onClick={toggleViewAllComments}
            >
              {viewAllComments ? "View Less" : "View More"}
            </button>
          )}
          {isCommentAddVisible && (
            <CommentAdd
              articleId={article.article_id}
              onCommentSubmit={handleNewComment}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default SingleArticle;
