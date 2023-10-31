import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "./../api";
import ArticleCard from "./ArticleCard";

const Topics = () => {
  const [articles, setArticles] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    fetchArticlesByTopic(selectedTopic);
  }, [selectedTopic]);

  const fetchArticlesByTopic = (topic) => {
    getArticles(topic)
      .then((fetchedArticles) => {
        setArticles(fetchedArticles);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  };

  const handleSelectedTopic = (e) => {
    const selectedSlug = e.target.value;
    setSelectedTopic(selectedSlug);
  };

  return (
    <section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4 text-center mt-5">All Topics</h1>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6 offset-md-3 col-12 px-3">
            <select
              className="form-select"
              aria-label="Default select example"
              value={selectedTopic}
              onChange={handleSelectedTopic}
            >
              <option selected disabled>
                Select Topic
              </option>
              <option value="coding">Coding</option>
              <option value="football">Football</option>
              <option value="cooking">Cooking</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {articles
            .filter(
              (article) => !selectedTopic || article.topic === selectedTopic
            )
            .map((article) => (
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

export default Topics;
