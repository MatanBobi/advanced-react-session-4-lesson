import { Link, useHistory } from "react-router-dom";
import { use } from "./hooks/use";
import { fetchData } from "./helpers/data";
import { useTransition } from "react";
import Spinner from "./Spinner/Spinner";

export function PokemonItem({ name }: { name: string }) {
  const pokemonData = use(
    fetchData(`https://pokeapi.co/api/v2/pokemon/${name}`)
  );
  const history = useHistory();
  const [isPending, startTransition] = useTransition();

  return (
    <div
      onClick={() => {
        startTransition(() => {
          history.push(`/pokemon/${pokemonData.id}`);
        });
      }}
    >
      <div className={`pokemon-wrapper ${isPending ? "pending" : ""}`}>
        {pokemonData.sprites && (
          <img src={pokemonData.sprites.front_default} alt="" />
        )}
        <div className="name">{name}</div>
        {isPending ? <Spinner /> : null}
      </div>
    </div>
  );
}
