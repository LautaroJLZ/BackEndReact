import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log(`Realizando búsqueda: ${searchTerm}`);
  };

  const toggleSearchVisibility = () => {
    setIsSearchVisible((prev) => !prev);
  };

  return (
    <div className="hidden 391:flex 391:items-center">
      <button
        onClick={toggleSearchVisibility}
        className="ml-2 hover:bg-slate-200 p-2 rounded"
      >
        <i className="bi bi-search"></i>
      </button>
      {isSearchVisible && (
        <div className="flex flex-row md:ml-2">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleInputChange}
            className="border rounded-lg md:p-2"
          />
          <button
            onClick={handleSearch}
            className="hover:bg-slate-200 p-2 rounded"
          >
            Buscar
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;


