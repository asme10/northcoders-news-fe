import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import Topics from "./components/Topics";
import TopicArticles from "./components/TopicArticles";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:articleId" element={<SingleArticle />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topic/:topicName" element={TopicArticles} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
