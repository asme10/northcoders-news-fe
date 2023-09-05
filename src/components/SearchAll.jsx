import React from "react";

const SearchAll = () => {
  return (
    <div className="container mt-4">
      <h2 className="search-title text-start">Search News</h2>
      <form className="search-form">
        <div className="input-group">
          <input
            className="form-control py-3"
            type="search"
            placeholder="Search here"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchAll;
