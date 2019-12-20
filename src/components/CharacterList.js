import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import styled from "styled-components";
import "../index.css";

import CharacterCard from "./CharacterCard";
import Header from "./Header";
import SearchForm from "./SearchForm"

const Wrapper = styled.div`
    display: flex;
    flex-flow: wrap row;
    justify-content: space-around;
    margin: 5% 0 0 5%;
`;

const LinkW = styled.div`
  text-decoration: none;
  background: teal;
  color: white;
  padding: 2%;
  font-size: 1rem;
  border-radius: 5px;
  margin: 3%;
  width: 10%;
  margin-left: 42%;
  text-align: center;
`;
 

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
      <LinkW>
        <Link className="link" to="/">Home</Link>
      </LinkW>
      <SearchForm query={query} handleChange={handleChange}/>
      <section className="character-list">
      <Wrapper>
      {character.map(char => {
        return(<div key={char.id}>
          <CharacterCard key={char.id} char={char}/>
        </div>
        )
      })}
       </Wrapper>
       </section>
    </div>
   
  );
}
