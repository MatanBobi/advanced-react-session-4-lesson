import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import { PokemonPage } from "./PokemonPage";

export function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/pokemon/:id" component={PokemonPage} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
