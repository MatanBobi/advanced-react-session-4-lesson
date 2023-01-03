import {
  Dispatch,
  memo,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { FetchState, Pokemon } from "./types";
import { PokemonItem } from "./PokemonItem";
import Spinner from "./Spinner/Spinner";

export const PokemonsList = memo(() => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [fetchState, setFetchState] = useState<FetchState>(FetchState.Idle);

  useEffect(() => {
    const getPokemons = () => {
      setFetchState(FetchState.Pending);
      fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
        .then((response) => response.json())
        .then((data) => {
          setPokemons(data.results);
          setFetchState(FetchState.Success);
        });
    };

    getPokemons();
  }, []);

  return (
    <div className="pokemons-list">
      {pokemons.map((pokemon) => (
        <PokemonItem name={pokemon.name} key={pokemon.name} />
      ))}
    </div>
  );
});
