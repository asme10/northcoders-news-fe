import React, { useState } from "react";

const SortField = ({ onSortChange }) => {
  const [selectedOption, setSelectedOption] = useState("sort_by");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    onSortChange(event.target.value, sortOrder);
  };

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    onSortChange(selectedOption, newSortOrder);
  };

  return (
    <div className="d-flex">
      <select
        className="form-select"
        aria-label="Default select example"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="sort_by" disabled>
          Sort by
        </option>
        <option value="comment_count">Comments</option>
        <option value="date">Date</option>
        <option value="votes">Votes</option>
      </select>
      <button
        type="button"
        className="btn btn-info text-white ms-2"
        onClick={toggleSortOrder}
      >
        {sortOrder === "asc" ? "Ascending" : "Descending"}
      </button>
    </div>
  );
};

export default SortField;
