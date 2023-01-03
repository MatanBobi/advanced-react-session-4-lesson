import { useEffect, useState, useMemo, Dispatch, SetStateAction } from "react";
import { PokemonDetails } from "./PokemonDetails";
import { PokemonColor } from "./PokemonColor";
import { PokemonEvolutions } from "./PokemonEvolutions";
import { PokemonImage } from "./PokemonImage";
import { BackButton } from "./BackButton";
import { PokemonData } from "./types";

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

export function PokemonPage({
  selectedPokemon,
  setSelectedPokemon,
}: {
  selectedPokemon: number;
  setSelectedPokemon: Dispatch<SetStateAction<number | null>>;
}) {
  const [pokemonChainData, setPokemonChain] = useState<PokemonChain | null>(
    null
  );
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
      .then((response) => response.json())
      .then((data: PokemonData) => {
        setPokemonData(data);
        fetch(data.species.url)
          .then((response) => response.json())
          .then((data: { evolution_chain: { url: string } }) => {
            fetch(data.evolution_chain.url)
              .then((response) => response.json())
              .then((data: PokemonChain) => {
                setPokemonChain(data);
              });
          });
      });
  }, [selectedPokemon]);

  const pokemonChain = useMemo(() => {
    if (pokemonChainData?.chain) {
      return getPokemonChain([], pokemonChainData.chain.evolves_to[0]);
    }
  }, [pokemonChainData]);

  return (
    <div className="pokemon-page">
      <BackButton setSelectedPokemon={setSelectedPokemon} />
      {pokemonData ? (
        <>
          <PokemonImage pokemonData={pokemonData} />
          <PokemonDetails pokemonData={pokemonData} />
          <PokemonColor types={pokemonData.types} />
        </>
      ) : null}
      <PokemonEvolutions pokemonChain={pokemonChain} />
    </div>
  );
}
