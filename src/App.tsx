import { useState } from "react";
import "./App.css";
import { Home } from "./Home";
import { PokemonPage } from "./PokemonPage";

export function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<null | number>(null);

  return (
    <div className="App">
      {!selectedPokemon ? (
        <Home setSelectedPokemon={setSelectedPokemon} />
      ) : (
        <PokemonPage
          setSelectedPokemon={setSelectedPokemon}
          selectedPokemon={selectedPokemon}
        />
      )}
    </div>
  );
}
