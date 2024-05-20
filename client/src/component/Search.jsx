import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { BASE_URL } from '../config';
import axios from 'axios';
const SearchBar = () => {
  const handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.search.value;
    try {
        const response = axios.post(`${BASE_URL}/api/search`,searchTerm);
        if (response === 200){
            alert("working");
        }
        else{
            alert("not working");
        }
    } catch (err) {
        console.log(err);
    }
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          name="search"
          placeholder="Search what you want"
          className="search-input"
        />
        <button type="submit" className="search-button">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
