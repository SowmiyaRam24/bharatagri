// Filter.js
import React from 'react';

const Filter = ({ searchTerm, setSearchTerm, onSearch }) => (
  <div>
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button onClick={onSearch}>Search</button>
  </div>
);

export default Filter;
