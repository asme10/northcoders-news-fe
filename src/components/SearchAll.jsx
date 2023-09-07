import React from "react";

const SearchAll = () => {
  return (
    <div className="container px-5 mt-5 mb-4">
      <div className="row">
        <div className="co">
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
      </div>
    </div>
  );
};

export default SearchAll;
