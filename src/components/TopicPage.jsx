import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../api";
import ArticleCard from "./ArticleCard";

const TopicPage = () => {
  const { topicSlug } = useParams();
  const [topicArticles, setTopicArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getArticlesByTopic(topicSlug)
      .then((articles) => {
        setTopicArticles(articles);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [topicSlug]);

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
              <h2 className="mb-3">{topicSlug.toUpperCase()} Articles</h2>
              <div className="row">
                {topicArticles.map((article) => (
                  <div key={article.id} className="col-md-6 mb-4">
                    <ArticleCard article={article} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopicPage;
