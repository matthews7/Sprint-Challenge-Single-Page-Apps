import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard"
import CharacterList from "./CharacterList";



export default function SearchForm({handleChange, query}) {
  


  return (
    <section className="search-form">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleChange}
      />
     
    </section>
  );
}
