// Home.js
import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import SearchAll from "./SearchAll";
import ArticleList from "./ArticleList";
import LatestUpdate from "./LatestUpdate";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchAll />
      <LatestUpdate />
      <ArticleList />
    </div>
  );
};

export default Home;
