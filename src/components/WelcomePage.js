import React from "react";
import Header from "./Header"
import {Link} from "react-router-dom";
import styled from "styled-components";
import "../index.css";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H1 =styled.h1`
  text-align: center;
`;
const Image = styled.img`
    border-radius: 50%;
    width: 50%;
`;

const LinkW = styled.div`
  text-decoration: none;
  background: teal;
  color: white;
  padding: 2%;
  font-size: 1rem;
  border-radius: 5px;
  margin: 3%;
`;
 
export default function WelcomePage() {
  return (
    <section className="welcome-page">
   
      <Header/>
      <Wrapper>
        <H1>Welcome to the ultimate fan site!</H1>
      
        <Image
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <LinkW>
          <Link className="link" to="/character">Characters</Link>
        </LinkW>
        
    </Wrapper>
    </section>
  );
}
