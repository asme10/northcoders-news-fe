import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "./../api";
import ArticleCard from "./ArticleCard";
import SortField from "./SortField";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [sortingOption, setSortingOption] = useState("date");
  const [sortingOrder, setSortingOrder] = useState("desc");

  useEffect(() => {
    getArticles()
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const compareFunction = (a, b) => {
      const factor = sortingOrder === "asc" ? 1 : -1;
      if (sortingOption === "date") {
        return factor * (new Date(a.created_at) - new Date(b.created_at));
      } else if (sortingOption === "comment_count") {
        return factor * (a.comment_count - b.comment_count);
      } else if (sortingOption === "votes") {
        return factor * (a.votes - b.votes);
      }
      return 0;
    };

    const sortedArticles = [...articles].sort(compareFunction);
    setArticles(sortedArticles);
  }, [sortingOption, sortingOrder]);

  const handleSortChange = (option, order) => {
    setSortingOption(option);
    setSortingOrder(order);
  };

  if (isLoading) {
    return (
      <div className="alert alert-success mx-5" role="alert">
        Loading...
      </div>
    );
  } else if (isError) {
    return (
      <div className="alert alert-danger mx-5" role="alert">
        Error: Failed to load articles. Please try again later.
      </div>
    );
  }
  return (
    <section style={{ paddingTop: "4rem" }}>
      <div className="container">
        <div className="row mt-5 px-3">
          <div className="col-md-4">
            <h1>All Article</h1>
          </div>
          <div className="col-md-4 offset-md-4">
            <SortField onSortChange={handleSortChange} />
          </div>
        </div>
        <div className="row pt-4">
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
