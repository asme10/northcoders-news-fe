import React from "react";
import Header from "./Header";
import SearchAll from "./SearchAll";
import LatestUpdate from "./LatestUpdate";
import Articles from "./Articles";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchAll />
      <LatestUpdate />
      <Articles />
    </div>
  );
};

export default Home;
