// src/components/SearchBar.js
import React, { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  const handleLocationChange = (e) => {
     console.log(e.target.value);
    setLocation(e.target.value);
  };

  const handleSearch = () => {
  if (location.trim() === "") {
    console.error("Location is empty");
    return;
  }

  console.log('SearchBar - handleSearch called with location:', location);
  onSearch(location);
};

  return (
    <div className="search-bar">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={handleLocationChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
