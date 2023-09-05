import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ArticleList from "./components/ArticleList";
import ArticleView from "./components/articleView";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/article/:article_id" element={<ArticleView />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
