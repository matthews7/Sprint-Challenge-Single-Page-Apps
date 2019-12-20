import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../index.css";


const Wrapper = styled.div`
 padding-left: 35%;
`;



export default function SearchForm({handleChange, query}) {
  


  return (
    <Wrapper className="search-form">
      <input className="search"
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleChange}
      />
     
    </Wrapper>
  );
}
