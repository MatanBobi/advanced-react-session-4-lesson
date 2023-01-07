import { memo } from "react";
import "./App.css";
import { Home } from "./Home";
import { useActivePokemon } from "./hooks/useActivePokemon";
import { PokemonPage } from "./PokemonPage";

export const App = memo(() => {
  const { activePokemon } = useActivePokemon();
  return (
    <div className="App">{activePokemon ? <PokemonPage /> : <Home />}</div>
  );
});
