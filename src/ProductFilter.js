// ProductFilter.js
import React, { useState } from 'react';
import './App.css';
const ProductFilter = ({ categories, onFilterChange, onSearchChange }) => {
  const handleFilterChange = (category) => {
    onFilterChange(category);
  };

  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <div>

      <div className='searchBar'>
        <h1>WayStore</h1>
        <input type="text" id="searchBox" placeholder="Search product name" onChange={handleSearchChange} />
      </div>

      <div className='catList'>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <button onClick={() => handleFilterChange(category)}>{category}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductFilter;
