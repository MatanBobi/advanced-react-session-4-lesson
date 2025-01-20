import {
  Dispatch,
  memo,
  SetStateAction,
  Suspense,
  useCallback,
  useEffect,
  useState,
  use
} from "react";
import { FetchState, Pokemon } from "./types";
import { PokemonItem } from "./PokemonItem";
import Spinner from "./Spinner/Spinner";
import { fetchData } from "./helpers/data";

export const PokemonsList = memo(() => {
  const data = use<{results: Pokemon[]}>(fetchData("https://pokeapi.co/api/v2/pokemon?limit=50"));
  const pokemons: Pokemon[] = data.results;

  return (
    <div className="pokemons-list">
      {/* <Suspense fallback={<Spinner />}> */}
      {pokemons.map((pokemon) => (
        <Suspense fallback={<Spinner />} key={pokemon.name}>
          <PokemonItem name={pokemon.name} />
        </Suspense>
      ))}
      {/* </Suspense> */}
    </div>
  );
});
