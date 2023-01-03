import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { PokemonData } from "./types";

export function PokemonItem({ name }: { name: string }) {
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
    <Link to={`/pokemon/${pokemonData.id}`}>
      <div className="pokemon-wrapper">
        {pokemonData.sprites && (
          <img src={pokemonData.sprites.front_default} alt="" />
        )}
        <div className="name">{name}</div>
      </div>
    </Link>
  );
}
