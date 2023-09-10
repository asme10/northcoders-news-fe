import axios from "axios";

const api = axios.create({
  baseURL: "https://asme-nc-news-api.onrender.com",
});

export const getArticles = (topic, sortBy, order) => {
  const params = {
    topic,
    sort_by: sortBy,
    order,
  };

  return api.get("/api/articles", { params }).then(({ data }) => {
    return data.articles;
  });
};

export const getTopics = () => {
  return api.get("/api/topics").then(({ data }) => {
    return data.topics;
  });
};

export const fetchArticlesFromTopic = (topic = null) => {
  const apiUrl = topic
    ? `https://asme-nc-news-api.onrender.com/api/topics/${topic}/articles`
    : "https://asme-nc-news-api.onrender.com/api/articles";

  return axios.get(apiUrl).then((response) => response.data.articles);
};

export const fetchArticles = (topic = null) => {
  const apiUrl = topic
    ? `https://asme-nc-news-api.onrender.com/api/articles?topic=${topic}`
    : "https://asme-nc-news-api.onrender.com/api/articles";

  return axios.get(apiUrl).then((response) => response.data.articles);
};

export const getArticleById = (articleId) => {
  return api.get(`/api/articles/${articleId}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticleId = (articleId) => {
  return api.get(`/api/articles/${articleId}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const getLatestArticle = () => {
  return api.get("/api/articles/?limit=1").then(({ data }) => {
    const [latest] = data.articles;
    return latest;
  });
};

export const getLatestComment = (articleId) => {
  return api.get(`/api/articles/${articleId}/comments`).then(({ data }) => {
    const [latestComment] = data.comments;
    return latestComment;
  });
};

export const postVoteArticle = (articleId, voteType) => {
  return api
    .patch(`/api/articles/${articleId}`, {
      inc_votes: voteType === "upvote" ? 1 : -1,
    })
    .then(({ data }) => {
      return data.article.votes;
    });
};

export const postNewComment = (articleId, commentText, username) => {
  const newComment = {
    article_id: articleId,
    author: username,
    body: commentText,
  };
  return api
    .post(`/api/articles/${articleId}/comments`, newComment)
    .then(({ data }) => {
      return data.comment;
    });
};
