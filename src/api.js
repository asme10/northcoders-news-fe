import axios from "axios";

const api = axios.create({
  baseURL: "https://asme-nc-news-api.onrender.com/",
});

export const getArticles = () => {
  return api.get("/api/articles").then(({ data }) => {
    return data.articles;
  });
};
