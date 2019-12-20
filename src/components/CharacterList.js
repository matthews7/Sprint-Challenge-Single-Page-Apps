import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import Header from "./Header";
import SearchForm from "./SearchForm"

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter]= useState([]);
  const[query, setQuery]= useState("")

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get("https://rickandmortyapi.com/api/character/")
    
    .then( res => {
      console.log(res.data.results);
      const data = res.data.results.filter( char => 
          char.name.toLowerCase().includes(query.toLowerCase())
      );
      setCharacter(data);
    })

    .catch( er => { 
        console.log("There are no characters", er);
    })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [query]);
  console.log(character);

  const handleChange = event => {
    setQuery(event.target.value);
  }

  return (
    <div>
      <Header/>
      <div>
      <Link to="/">Home</Link>
      </div>
      <SearchForm query={query} handleChange={handleChange}/>
      <section className="character-list">
      {character.map(char => {
        return(<div key={char.id}>
          <CharacterCard key={char.id} char={char}/>
        </div>
        )
      })}
       
       </section>
    </div>
   
  );
}
