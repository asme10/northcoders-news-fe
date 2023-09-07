import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import CommentAdd from "./components/CommentAdd";
import Coding from "./components/Coding";
import Football from "./components/Football";
import Cooking from "./components/Cooking";
import Topics from "./components/Topics";
import TopicPage from "./components/TopicPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/article/:article_id" element={<SingleArticle />} />
        <Route
          path="/article/:article_id/comment/add"
          element={<CommentAdd />}
        />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:topicSlug" element={<TopicPage />} />
        <Route path="/topics/coding" element={<Coding />} />
        <Route path="/topics/football" element={<Football />} />
        <Route path="/topics/cooking" element={<Cooking />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
