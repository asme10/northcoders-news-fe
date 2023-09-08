const ArticleCard = ({ article }) => {
  const formattedDate = new Date(article.created_at).toLocaleDateString();
  const capitalizedTopic =
    article.topic.charAt(0).toUpperCase() + article.topic.slice(1);
  const capitalizedTitle =
    article.title.charAt(0).toUpperCase() + article.title.slice(1);
  console.log(capitalizedTopic);

  return (
    <div className="card h-100 shadow border-0">
      <img
        src={article.article_img_url}
        className="card-img-top"
        alt={article.title}
      />
      <div className="card-body pt-3 px-4">
        <h4 className="card-text">{capitalizedTopic}</h4>
        <p className="card-text ">{capitalizedTitle}</p>
        <p className="card-text">Comments: {article.comment_count}</p>
        <p className="card-text">Votes: {article.votes}</p>

        <button className="btn btn-primary">Read More</button>
      </div>

      <hr style={{ border: "1px solid #000", width: "100%" }} />

      <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
        <div className="d-flex align-items-end justify-content-between">
          <div className="d-flex align-items-center">
            <img
              className="rounded-circle me-3"
              src={article.article_img_url}
              alt="Profile image"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
            <div className="small">
              <div className="fw-bold">{article.author}</div>
              <div className="text-muted">{formattedDate}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
