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
        return factor * (new Date(a.published_at) - new Date(b.published_at));
      } else if (sortingOption === "comment_count") {
        return factor * (a.commentCount - b.commentCount);
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
    <section>
      <div className="container" style={{ paddingTop: "6rem" }}>
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4 text-center">All Articles</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-end my-4">
            <SortField onSortChange={handleSortChange} className="ml-auto" />
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
