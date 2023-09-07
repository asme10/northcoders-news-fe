import React, { useState } from "react";

const SortField = ({ onSortChange }) => {
  const [sortingOption, setSortingOption] = useState("date");
  const [sortingOrder, setSortingOrder] = useState("desc");

  const handleSortChange = (event) => {
    setSortingOption(event.target.value);
    onSortChange(event.target.value, sortingOrder);
  };

  const toggleSortingOrder = () => {
    const newOrder = sortingOrder === "asc" ? "desc" : "asc";
    setSortingOrder(newOrder);
    onSortChange(sortingOption, newOrder);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <label style={{ width: "140px", fontWeight: "bold" }}>
        Sort by:
      </label>
      <select
        value={sortingOption}
        onChange={handleSortChange}
        className="form-select me-3"
        aria-label="Default select example"
      >
        <option selected>View All</option>
        <option value="date">Date</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={toggleSortingOrder}
      >
        {sortingOrder === "asc" ? "Ascending" : "Descending"}
      </button>
    </div>
  );
};

export default SortField;
