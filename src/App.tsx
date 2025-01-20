import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import { PokemonPage } from "./PokemonPage";

export function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/pokemon/:id" element={<PokemonPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
