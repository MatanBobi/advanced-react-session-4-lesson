import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { PokemonData } from "./types";

export function PokemonItem({
  name,
  setSelectedPokemon,
}: {
  name: string;
  setSelectedPokemon: Dispatch<SetStateAction<number | null>>;
}) {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
      });
  }, [name]);

  if (!pokemonData) {
    return null;
  }

  return (
    <div
      className="pokemon-wrapper"
      onClick={() => setSelectedPokemon(pokemonData.id)}
    >
      {pokemonData.sprites && (
        <img src={pokemonData.sprites.front_default} alt="" />
      )}
      <div className="name">{name}</div>
    </div>
  );
}
