import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

  if (isLoading) {
    return (
      <div className="alert alert-success" role="alert">
        Loading...
      </div>
    );
  }
  if (isError) {
    return (
      <div className="alert alert-danger" role="alert">
        Oops, something went wrong!
      </div>
    );
  }

  return (
    <section className="container my-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {articles.map((article) => (
          <div className="col mb-4" key={article.article_id}>
            <Link
              to={`/article/${article.article_id}`}
              style={{ textDecoration: "none" }}
            >
              <ArticleCard article={article} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleList;
