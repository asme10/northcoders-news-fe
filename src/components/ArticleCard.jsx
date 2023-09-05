import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <div className="card" style={{ width: "26rem" }}>
      <img
        src={article.article_img_url}
        className="card-img-top"
        alt={article.title}
      />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.author}</p>
        <p className="card-text">{article.topic}</p>
        <p className="card-text">{article.created_at}</p>
        <p className="card-text">Comment Count: {article.comment_count}</p>
        <p className="card-text">Votes: {article.votes}</p>
        <button className="btn btn-primary">Read More</button>
      </div>
    </div>
  );
};

export default ArticleCard;
