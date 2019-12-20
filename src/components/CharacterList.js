import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import Header from "./Header";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter]= useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get("https://rickandmortyapi.com/api/character/")
    
    .then( res => {
      console.log(res.data.results);
      setCharacter(res.data.results)
    })

    .catch( er => { 
        console.log("There are no characters", er);
    })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
  console.log(character);
  return (
    <div>
      <Header/>
      <section className="character-list">
      {character.map(char => {
        return(<div key={char.id}>
          <CharacterCard key={char.id} char={char}/>
        </div>
        )
      })}
       // <h2>TODO: `array.map()` over your state here!</h2>
       </section>
    </div>
   
  );
}
