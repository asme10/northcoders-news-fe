import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArticleList from "./ArticleList";
import { getArticles } from "./../api";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getArticles()
      .then((articlesData) => {
        setArticles(articlesData);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <section>
      <div className="container" style={{ paddingTop: "8rem" }}>
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4 text-center">All Articles</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {isLoading ? (
              <div className="alert alert-success" role="alert">
                Loading...
              </div>
            ) : isError ? (
              <div className="alert alert-danger" role="alert">
                Oops, something went wrong!
              </div>
            ) : (
              <ArticleList articles={articles} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
