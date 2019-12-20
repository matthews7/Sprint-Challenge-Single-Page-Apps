import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const Image = styled.img`
    border-radius: 50%;
    width: 70%;
`;


export default function CharacterCard(props) {
  return(
    <Wrapper>
      <Image src={props.char.image}/>
      <h2> {props.char.name}</h2>
      <p>Status: {props.char.status}</p>
      {/* <span>todo: character</span>; */}
    </Wrapper>
  ) 
}
