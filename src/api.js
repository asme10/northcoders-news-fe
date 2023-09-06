import axios from "axios";

const api = axios.create({
  baseURL: "https://asme-nc-news-api.onrender.com/",
});

export const getArticles = () => {
  return api.get("/api/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return api.get(`/api/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const postArticleVote = (article_id, voteType) => {
  return api
    .post(`/api/articles/${article_id}/votes`, { vote: voteType })
    .then(({ data }) => {
      return data.article;
    });
};
