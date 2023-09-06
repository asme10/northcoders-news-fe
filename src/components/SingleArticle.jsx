import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { getArticles, getCommentsByArticleId } from "../api";
import Comments from "./Comments";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [showComments, setShowComments] = useState(true);

  useEffect(() => {
    getArticles()
      .then((articles) => {
        const foundArticle = articles.find(
          (article) => article.article_id === +article_id
        );
        if (foundArticle) {
          setArticle(foundArticle);
        } else {
          setIsError(true);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });

    getCommentsByArticleId(article_id)
      .then((comments) => {
        setComments(comments);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, [article_id]);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  if (isLoading) {
    return (
      <div className="alert alert-success" role="alert">
        <p>Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="alert alert-danger" role="alert">
        <p>Oops, something went wrong!</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="alert alert-danger" role="alert">
        <p>Article not found!</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <div
        className="container my-5 py-5"
        style={{
          paddingTop: "8rem",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "5px",
        }}
      >
        <div className="row">
          <div className="col">
            <h1
              style={{
                maxWidth: "800px",
                textAlign: "center",
                margin: "5px auto",
              }}
            >
              {article.title}
            </h1>
            <div className="card" style={{ width: "60%", margin: "10px auto" }}>
              <img src={article.article_img_url} alt={article.title} />
              <div className="card-body pt-4">
                <h5>By {article.author} </h5>
                <span>
                  Date: {new Date(article.created_at).toLocaleString()}
                </span>
                <hr style={{ border: "1px solid #000", width: "60px" }} />
                <p>{article.body}</p>
                <p>
                  {article.topic.charAt(0).toUpperCase() +
                    article.topic.slice(1)}
                </p>
                <p>
                  Votes: {article.votes}
                  <button className="btn btn-primary ms-5">
                    <i className="fa-solid fa-arrow-up"></i>
                  </button>
                  <button className="btn btn-danger ms-2">
                    <i className="fa-solid fa-arrow-down"></i>
                  </button>
                </p>

                <p className="btn btn-primary mt-4" onClick={toggleComments}>
                  {showComments ? "Hide Comments" : "Show Comments"}
                </p>
              </div>
              {showComments && <Comments comments={comments} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleArticle;
