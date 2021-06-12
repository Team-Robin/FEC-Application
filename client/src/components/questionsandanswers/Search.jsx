import React, { useState } from 'react';

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const input = event.target.value;
    setSearchTerm(input);

    if (input) {
      props.searchQuestions(input);
    }
  };
  return (
    <div>
      <div className="QA-search">
        <input
          className="QA-search-bar"
          type="text"
          label="Search"
          placeholder="Have a Question? Search for an Answer"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};
export default Search;
