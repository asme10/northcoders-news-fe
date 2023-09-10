import React, { useState } from "react";

const SortField = ({ onSortChange }) => {
  const [sortingOption, setSortingOption] = useState("date");
  const [sortingOrder, setSortingOrder] = useState("desc");

  const handleSortChange = (event) => {
    const newSortingOption = event.target.value;
    setSortingOption(newSortingOption);
    onSortChange(newSortingOption, sortingOrder);
  };

  const toggleSortingOrder = () => {
    const newSortingOrder = sortingOrder === "asc" ? "desc" : "asc";
    setSortingOrder(newSortingOrder);
    onSortChange(sortingOption, newSortingOrder);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <label style={{ width: "140px", fontWeight: "bold" }}>Sort by:</label>
      <select
        value={sortingOption}
        onChange={handleSortChange}
        className="form-select me-3"
        aria-label="Default select example"
      >
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
