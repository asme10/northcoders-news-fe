import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "./../api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getArticles()
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <section>
      <div className="container " style={{ paddingTop: "8rem" }}>
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4 text-center">All Articles</h1>
          </div>
        </div>
        <div className="row">
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
      </div>
    </section>
  );
};

export default Articles;
