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

  return (
    <section className="container my-5">
      {isLoading ? (
        <div className="alert alert-success" role="alert">
          Loading...
        </div>
      ) : isError ? (
        <div className="alert alert-danger" role="alert">
          Oops, something went wrong!
        </div>
      ) : (
        <div className="d-flex flex-wrap">
          {articles.map((article) => (
            <div className="col-md-4 mb-4" key={article.article_id}>
              <Link   
                to={`/article/${article.article_id}`}
                style={{ textDecoration: "none" }}
              >
                <ArticleCard article={article} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ArticleList;
