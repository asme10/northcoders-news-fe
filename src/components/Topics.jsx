import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "./../api";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getTopics()
      .then((topics) => {
        setTopics(topics);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <div className="alert alert-success" role="alert">
          Loading...
        </div>
      ) : isError ? (
        <div className="alert alert-danger" role="alert">
          Oops, something went wrong!
        </div>
      ) : topics ? (
        <>
          <h2>Topics</h2>
          <ul className="list-group">
            {topics.map((topic) => (
              <li className="list-group-item" key={topic.slug}>
                <Link
                  to={`/topics/${topic.slug}`}
                  className="text-decoration-none"
                >
                  {topic.name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div>No topics available.</div>
      )}
    </div>
  );
};

export default Topics;
