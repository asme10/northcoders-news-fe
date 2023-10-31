import React, { useState } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

const SearchAll = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .get(
        `https://asme-nc-news-api.onrender.com/api/articles?search=${searchTerm}`
      )
      .then(({ data }) => {
        setSearchResults(data.articles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
        setIsLoading(false);
        setIsError(true);
      });
  };

  return (
    <>
      <div className="container px-3 mt-5 mb-2">
        <div className="row">
          <div className="col">
            <h2 className="search-title text-start">Search News</h2>
            <form className="search-form" onSubmit={handleSearch}>
              <div className="input-group">
                <input
                  className="form-control py-3"
                  type="search"
                  placeholder="Search here"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container px-3 mt-4">
        <div className="row">
          <div className="col">
            {isLoading ? (
              <div className="alert alert-success" role="alert">
                Loading...
              </div>
            ) : isError ? (
              <div className="alert alert-danger" role="alert">
                Oops, something went wrong!
              </div>
            ) : (
              <div className="d-flex flex-wrap">
                {searchResults.map((result) => (
                  <div className="col-md-4 mb-4" key={result.article_id}>
                    <Link
                      to={`/article/${result.article_id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <ArticleCard article={result} />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchAll;
