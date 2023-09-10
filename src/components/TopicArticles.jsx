import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchArticlesFromTopic } from "./../api";
import ArticleCard from "./ArticleCard";

const TopicArticles = () => {
  const { topicName } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetchArticlesFromTopic(topicName)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [topicName]);

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
      <div className="container">
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

export default TopicArticles;
