import React, { useState } from 'react';
import productData from './productData';

const FindProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filteredProducts = productData.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredProducts);
  };

  return (
    <div>
      <h2>Find Products</h2>
      <input 
        type="text" 
        placeholder="Enter product name" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {results.length > 0 ? (
        <ul>
          {results.map((product, index) => (
            <li key={index}>
              <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
              <p><strong>{product.name}</strong></p>
              <p>{product.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        searchTerm && <p>No products found.</p>
      )}
    </div>
  );
};

export default FindProducts;
