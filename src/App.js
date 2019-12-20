import React from "react";
import {Switch, Route} from "react-router-dom";

import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";


export default function App() {
  return (
    <main>
      <Switch>
        <Route path="/character">
           <CharacterList/>
        </Route>
        <Route path="/">
          <WelcomePage/>
        </Route>
      </Switch>
    
    </main>
  );
}
