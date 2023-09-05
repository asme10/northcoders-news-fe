import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { getArticles, getCommentsByArticleId } from "./../api";

const ArticleView = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

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
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <img
              src={article.article_img_url}
              alt={article.title}
              style={{ maxWidth: "100%", marginTop: "30px" }}
            />
            <h1>{article.title}</h1>
            <p>Author: {article.author}</p>
            <p>Topic: {article.topic}</p>
            <p>Created At: {article.created_at}</p>
            <p>Comment Count: {article.comment_count}</p>
            <p>Votes: {article.votes}</p>
            <p>{article.body}</p>
          </div>
        </div>
      </div>

      <div className="container mt-4 mx-auto">
        <h2>Comments associated with an article</h2>
        {comments.map((comment) => (
          <div key={comment.comment_id} className="comment-card">
            <p>
              <strong>{comment.author}:</strong>
            </p>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleView;
