import { useEffect, useState, useMemo, Dispatch, SetStateAction } from "react";
import { PokemonDetails } from "./PokemonDetails";
import { PokemonColor } from "./PokemonColor";
import { PokemonEvolutions } from "./PokemonEvolutions";
import { PokemonImage } from "./PokemonImage";
import { BackButton } from "./BackButton";
import { FetchState, PokemonData } from "./types";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Spinner from "./Spinner/Spinner";
import { use } from "./hooks/use";
import { fetchData } from "./helpers/data";

export const getPokemonChain = (acc: any, data: any) => {
  acc.push({
    name: data.species.name,
  });
  if (data.evolves_to.length === 0) {
    return acc;
  } else {
    return data.evolves_to.reduce(getPokemonChain, acc);
  }
};

interface PokemonChain {
  chain: { evolves_to: { species: { name: string } }[] };
}

export function PokemonPage() {
  const { id } = useParams<{ id: string }>();
  const pokemonData = use(fetchData(`https://pokeapi.co/api/v2/pokemon/${id}`));
  const pokemonSpecies = use(fetchData(pokemonData.species.url));
  const pokemonChainData = use(fetchData(pokemonSpecies.evolution_chain.url));

  const pokemonChain = useMemo(() => {
    if (pokemonChainData?.chain) {
      return getPokemonChain([], pokemonChainData.chain.evolves_to[0]);
    }
  }, [pokemonChainData]);

  return (
    <div className="pokemon-page">
      <Link to="/">
        <BackButton />
      </Link>
      <>
        <PokemonImage pokemonData={pokemonData} />
        <PokemonDetails pokemonData={pokemonData} />
        <PokemonColor types={pokemonData.types} />
      </>
      <PokemonEvolutions pokemonChain={pokemonChain} />
    </div>
  );
}
