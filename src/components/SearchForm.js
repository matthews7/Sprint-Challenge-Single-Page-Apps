import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useStat([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    const results = props.character.filter(char => 
      char.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results);
  },[searchTerm]);

  return (
    <section className="search-form">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />


     // Add a search form here
    </section>
  );
}
