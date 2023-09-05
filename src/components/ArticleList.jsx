import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../api";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getArticles()
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);
  return (
    <section className="container mt-5">
      {isLoading && (
        <div className="alert alert-success" role="alert">
          Loading...
        </div>
      )}
      {isError && (
        <div className="alert alert-danger" role="alert">
          Oops, something went wrong!
        </div>
      )}
      <div className="article-list d-flex flex-wrap justify-content-between gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default ArticleList;
