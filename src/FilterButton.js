import React from "react";

const FilterButton = ({ id, filter, setFilter, label }) => {
  return (
    <button
      id={id}
      className={filter === id ? "active" : ""}
      onClick={() => setFilter(id)}
    >
      {label}
    </button>
  );
};

export default FilterButton;
