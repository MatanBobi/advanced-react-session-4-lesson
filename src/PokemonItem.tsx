import { use } from "./hooks/use";
import { fetchData } from "./helpers/data";
import { useActivePokemon } from "./hooks/useActivePokemon";

export function PokemonItem({ name }: { name: string }) {
  const pokemonData = use(
    fetchData(`https://pokeapi.co/api/v2/pokemon/${name}`)
  );
  const { setActivePokemon } = useActivePokemon();

  return (
    <div
      onClick={() => {
        setActivePokemon(pokemonData.id);
      }}
    >
      <div className="pokemon-wrapper">
        {pokemonData.sprites && (
          <img src={pokemonData.sprites.front_default} alt="" />
        )}
        <div className="name">{name}</div>
      </div>
    </div>
  );
}
