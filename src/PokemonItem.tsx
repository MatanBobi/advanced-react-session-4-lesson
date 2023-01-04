import { useState, useEffect } from "react";
import Spinner from "./Spinner/Spinner";
import { Link } from "react-router-dom";
import { FetchState, PokemonData } from "./types";

export function PokemonItem({ name }: { name: string }) {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
  const [fetchState, setFetchState] = useState(FetchState.Idle);

  useEffect(() => {
    const fetchData = async () => {
      setFetchState(FetchState.Pending);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setPokemonData(data);
      setFetchState(FetchState.Success);
    };

    fetchData();
  }, [name]);

  if (fetchState === FetchState.Pending || !pokemonData) {
    return <Spinner />;
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
