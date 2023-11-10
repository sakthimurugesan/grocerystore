// App.js
import React, { useState } from 'react';
import './App.css';
import ProductFilter from './ProductFilter';
import ProductList from './ProductList';

import productsData from './products.json';

const allCategories = ['Men', 'Women', 'Unisex', 'Shoe', 'Watch', 'Bag'];

function App() {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (category) => {
    if (category === 'All') {
      setFilteredProducts(productsData);
    } else {
      const filteredProducts = productsData.filter((product) =>
        product.category.includes(category)
      );
      setFilteredProducts(filteredProducts);
    }
  };

  const handleSearchChange = (searchTerm) => {
    setSearchTerm(searchTerm);
    const filteredProducts = productsData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  return (
    <div className="App">
      <h1>Product Filter</h1>
      <ProductFilter
        categories={['All', ...allCategories]}
        onFilterChange={handleFilterChange}
        onSearchChange={handleSearchChange}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
