import React from "react";
import {Switch, Link} from "react-router-dom"

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div>
      <Link to="/">Home</Link>
      <Link to="/characters">Characters</Link>
      </div>
     
    </header>
  );
}
