import React, { useState, useEffect } from "react";
import SortArticles from "./SortField";
import {
  fetchSortedArticles,
  getArticles,
  getArticle,
  getArticlesByTopic,
  getCommentsByArticleId,
  getTopics,
  getUser,
  VoteArticle,
  VoteComment,
  postCommentToArticle,
  postArticle,
  deleteComment,
} from "./../api";

const SortedArticles = () => {
  const [sortedArticles, setSortedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSortedArticles("date", "desc")
      .then((articles) => {
        setSortedArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const handleSortChange = (sortOption, sortOrder) => {
    fetchSortedArticles(sortOption, sortOrder)
      .then((articles) => {
        setSortedArticles(articles);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Latest Updates</h1>
      <SortField onSortChange={handleSortChange} />
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center">Error: {error.message}</p>
      ) : (
        <div>
          {sortedArticles.map((article) => (
            <div key={article.id} className="card mb-3">
              <div className="card-body">
                <h2 className="card-title">{article.title}</h2>
                <p className="card-text">{article.body}</p>
                <p className="card-text">
                  Published Date: {article.created_at}
                </p>
                <p className="card-text">
                  Comment Count: {article.comment_count}
                </p>
                <p className="card-text">Votes: {article.votes}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortedArticles;
