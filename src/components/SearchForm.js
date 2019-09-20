import React from "react";

const SearchForm = () => {
  const handleFormSubmit = e => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="search" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
