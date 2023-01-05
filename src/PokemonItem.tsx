import { Link } from "react-router-dom";
import { use } from "./hooks/use";
import { fetchData } from "./helpers/data";

export function PokemonItem({ name }: { name: string }) {
  const pokemonData = use(
    fetchData(`https://pokeapi.co/api/v2/pokemon/${name}`)
  );

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
