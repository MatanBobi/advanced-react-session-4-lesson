import { TypeItem } from "./TypeItem";
import { PokemonType } from "./types";

export function PokemonColor({ types }: { types: PokemonType[] }) {
  return (
    <div className="pokemon-color">
      <h5>Types:</h5>
      <ul className="types-list">
        {types &&
          types.map(({ type }) => <TypeItem key={type.name} type={type} />)}
      </ul>
    </div>
  );
}
