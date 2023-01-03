import { Dispatch, SetStateAction } from "react";

export function BackButton({
  setSelectedPokemon,
}: {
  setSelectedPokemon: Dispatch<SetStateAction<number | null>>;
}) {
  return (
    <button className="back-button" onClick={() => setSelectedPokemon(null)}>
      Back
    </button>
  );
}
