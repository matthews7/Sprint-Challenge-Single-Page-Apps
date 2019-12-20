import React from "react";

export default function CharacterCard(props) {
  return(
    <div>
      <h2>Name: {props.char.name}</h2>
      <p>Status: {props.char.status}</p>
      {/* <span>todo: character</span>; */}
    </div>
  ) 
}
