import { getMainImageUrl } from "./helpers/utils";
import { PokemonData } from "./types";

export function PokemonImage({ pokemonData }: { pokemonData: PokemonData }) {
  return (
    <div className="pokemon-image">
      <img src={getMainImageUrl(pokemonData.name)} alt="" />
    </div>
  );
}
