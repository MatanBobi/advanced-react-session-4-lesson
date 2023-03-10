import { PokemonData } from "./types";

export function PokemonDetails({ pokemonData }: { pokemonData: PokemonData }) {
  return (
    <>
      <h1 className="pokemon-name">{pokemonData.name}</h1>
      <div className="pokemon-details">
        <h3>Details</h3>
        <h5>Stats:</h5>
        <ul className="moves-list">
          {pokemonData &&
            pokemonData.stats &&
            pokemonData.stats.map((stat) => {
              return (
                <li
                  key={stat.stat.name}
                >{`${stat.stat.name}: ${stat.base_stat}`}</li>
              );
            })}
        </ul>
      </div>
    </>
  );
}
