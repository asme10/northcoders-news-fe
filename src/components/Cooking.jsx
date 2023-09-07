import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticlesByTopic } from "./../api";

const Coding = () => {
  const [codingArticles, setCodingArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getArticlesByTopic("coding")
      .then((articles) => {
        setCodingArticles(articles);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {isLoading ? (
            <div className="alert alert-success" role="alert">
              Loading...
            </div>
          ) : isError ? (
            <div className="alert alert-danger" role="alert">
              Oops, something went wrong!
            </div>
          ) : (
            <>
              <h2 className="mb-3">Coding Articles</h2>
              <ul className="list-group">
                {codingArticles.map((article) => (
                  <li
                    key={article.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <Link to={`/article/${article.id}`}>{article.title}</Link>
                  </li>
                ))}
              </ul> 
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coding;
