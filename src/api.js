import axios from "axios";

const api = axios.create({
  baseURL: "https://asme-nc-news-api.onrender.com/",
});

export const getArticles = () => {
  return api.get("/api/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getArticle = () => {
  return api.get("/api/articles/${articleId}").then(({ data }) => {
    return data.article;
  });
};

export const getArticlesByTopic = (topicSlug) => {
  return api.get(`/api/topics/${topicSlug}/articles`).then(({ data }) => {
    return data.articles;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return api.get(`/api/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const getTopics = () => {
  return api.get("/api/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getUser = (userName) => {
  return api.get(`/api/users/${userName}`).then(({ data }) => {
    return data.user;
  });
};

export const VoteArticle = (articleId, direction) => {
  return api
    .get(`/api/articles/${articleId}?vote=${direction}`)
    .then(({ data }) => {
      return data.article;
    })
    .catch(console.log);
};

export const VoteComment = (articleId, direction) => {
  return api
    .get(`/api//comments/${commentId}?vote=${direction}`)
    .then(({ data }) => {
      return data.comment;
    })
    .catch(console.log);
};

export const postCommentToArticle = (articleId, body, userId) => {
  return api
    .post(`/api/articles/${articleId}/comments`, {
      body,
      created_by: userId,
    })
    .then(({ data: { comment } }) => ({ comment }));
};

export const postArticle = (body, title, topicSlug, userId) => {
  return api
    .post(`/api/articles/${topicSlug}/articles`, {
      title,
      body,
      created_by: userId,
    })
    .then(({ data: { article } }) => ({ article }));
};

export const deleteComment = (commentId) => {
  return api.delete(`/api/articles/comments/${commentId}`).then((data) => {
    return data.comment;
  });
};
export const fetchSortedArticles = (sortOption, sortOrder) => {
  return api
    .get(`/api/articles?sort_by=${sortOption}&order=${sortOrder}`)
    .then(({ data }) => {
      return data.articles;
    });
};