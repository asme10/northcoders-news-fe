// Home.js
import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import SearchAll from "./SearchAll";
import ArticleList from "./ArticleList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <SearchAll />
      <ArticleList />
    </div>
  );
};

export default Home;
