import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopicArticles from "./TopicArticles";

const Topics = () => {
  const topics = ["Coding", "Football", "Cooking"];
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopic = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4 text-center mt-5">All Topics</h1>
          </div>
        </div>
        <div className="row">
          {topics.map((topic, index) => (
            <div className="col-md-4 mb-4" key={topic}>
              <div
                className={`card bg-${index % 2 === 0 ? "primary" : "success"}`}
              >
                <div className="card-body text-center">
                  <h5 className="card-title">
                    <Link
                      to={`/topics`}
                      className="text-decoration-none text-white"
                      onClick={() => handleTopic(topic)}
                    >
                      {topic}
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <TopicArticles />
      </div>
    </section>
  );
};

export default Topics;
