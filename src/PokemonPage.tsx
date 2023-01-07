import { useEffect, useState, useMemo, Dispatch, SetStateAction } from "react";
import { PokemonDetails } from "./PokemonDetails";
import { PokemonColor } from "./PokemonColor";
import { PokemonEvolutions } from "./PokemonEvolutions";
import { PokemonImage } from "./PokemonImage";
import { BackButton } from "./BackButton";
import { FetchState, PokemonData } from "./types";
import Spinner from "./Spinner/Spinner";
import { useActivePokemon } from "./hooks/useActivePokemon";

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
  const [pokemonChainData, setPokemonChain] = useState<PokemonChain | null>(
    null
  );
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
  const [pokemonDataFetchState, setPokemonDataFetchState] = useState(
    FetchState.Idle
  );
  const [pokemonEvoluationsFetchState, setPokemonEvoluationsFetchState] =
    useState(FetchState.Idle);

  const { activePokemon, setActivePokemon } = useActivePokemon();

  useEffect(() => {
    setPokemonDataFetchState(FetchState.Pending);
    fetch(`https://pokeapi.co/api/v2/pokemon/${activePokemon}`)
      .then((response) => response.json())
      .then((data: PokemonData) => {
        setPokemonData(data);
        setPokemonDataFetchState(FetchState.Success);
        setPokemonEvoluationsFetchState(FetchState.Pending);
        fetch(data.species.url)
          .then((response) => response.json())
          .then((data: { evolution_chain: { url: string } }) => {
            fetch(data.evolution_chain.url)
              .then((response) => response.json())
              .then((data: PokemonChain) => {
                setPokemonChain(data);
                setPokemonEvoluationsFetchState(FetchState.Success);
              });
          });
      });
  }, [activePokemon]);

  const pokemonChain = useMemo(() => {
    if (pokemonChainData?.chain) {
      return getPokemonChain([], pokemonChainData.chain.evolves_to[0]);
    }
  }, [pokemonChainData]);

  return (
    <div className="pokemon-page">
      <BackButton
        onClick={() => {
          setActivePokemon("");
        }}
      />
      {pokemonDataFetchState === FetchState.Pending || !pokemonData ? (
        <Spinner />
      ) : (
        <>
          <PokemonImage pokemonData={pokemonData} />
          <PokemonDetails pokemonData={pokemonData} />
          <PokemonColor types={pokemonData.types} />
        </>
      )}
      {pokemonEvoluationsFetchState === FetchState.Pending || !pokemonChain ? (
        <Spinner />
      ) : (
        <PokemonEvolutions pokemonChain={pokemonChain} />
      )}
    </div>
  );
}
