import React, { useState, useEffect } from "react";
import axios from "axios";

const LatestUpdate = () => {
  const [latestArticle, setLatestArticle] = useState(null);
  const [latestComment, setLatestComment] = useState(null);

  useEffect(() => {
    axios
      .get("https://asme-nc-news-api.onrender.com/api/articles?limit=1")
      .then(({ data }) => {
        const [latest] = data.articles;
        setLatestArticle(latest);
        axios
          .get(
            `https://asme-nc-news-api.onrender.com/api/articles/${latest.article_id}/comments`
          )
          .then(({ data }) => {
            const [latestComment] = data.comments;
            setLatestComment(latestComment);
          });
      });
  }, []);

  return (
    <div className="container px-5">
      {latestArticle && (
        <div className="d-flex justify-content-between align-items-center mt-2">
          <h2>Latest updates</h2>
        </div>
      )}

      {latestArticle && (
        <div className="row gx-5 align-items-center justify-content-center">
          <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
            <img
              className="img-fluid rounded-3 my-5"
              src={latestArticle.article_img_url}
              alt="Latest Article"
            />
          </div>
          <div className="col-lg-8 col-xl-7 col-xxl-6">
            <div className="my-5 text-center text-xl-start">
              <h2 className="display-5">{latestArticle.title}</h2>
              <p className="lead fw-normal text-black-50">
                {latestComment && (
                  <div>
                    <h3>Latest Comment </h3>
                    <p>{latestComment.body}</p>
                  </div>
                )}
              </p>
              <h5 className="mb-3">{latestArticle.topic}</h5>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                <a
                  className="btn btn-outline-primary btn-lg px-4"
                  href={`/article/${latestArticle.article_id}`}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LatestUpdate;
